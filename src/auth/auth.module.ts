import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConfig } from 'src/config/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
        PrismaModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),

        JwtModule.register({
            secret: jwtConfig.secret,
            signOptions: {
                expiresIn: jwtConfig.expired
            }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]

})
export class AuthModule { }
