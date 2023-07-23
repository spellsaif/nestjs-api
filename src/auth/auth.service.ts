import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDTO from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import LoginDTO from './dto/login.dto';
import { jwtConfig } from 'src/config/jwt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async register(data: RegisterDTO) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: data.email
            }
        })

        if (user) {
            throw new HttpException('User already exists!', HttpStatus.FOUND);
        }

        data.password = await hash(data.password, 10);

        const newUser = await this.prisma.user.create({ data });

        if (newUser) {
            return {
                statusCode: 201,
                data: newUser,
                message: 'user created successfully!!!'
            }
        }
    }

    async login(data: LoginDTO) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: data.email
            }
        })

        if (!user) {
            throw new HttpException('Invalid email or password', HttpStatus.BAD_REQUEST);
        }

        const comparePassword = await compare(data.password, user.password);

        if (!comparePassword) {
            throw new HttpException('Invalid email or password', HttpStatus.BAD_REQUEST);
        }

        const accessToken = this.generateJwt({
            sub: user.id,
            name: user.username,
            email: user.email
        })

        return {
            statusCode: 200,
            message: 'logged in successfully.',
            accessToken
        }

    }

    generateJwt(payload: any) {
        return this.jwt.sign(payload, {
            secret: jwtConfig.secret,
            expiresIn: jwtConfig.expired
        })
    }
}
