import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtGuard } from "src/guards/auth.guard";
import { AuthService } from "./auth.service";
import LoginDTO from "./dto/login.dto";
import RegisterDTO from "./dto/register.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Get()
    @UseGuards(JwtGuard)
    user(@Req() req) {
        return req.user
    }

    @Post('register')
    register(@Body() registerDTO: RegisterDTO) {
        return this.authService.register(registerDTO);
    }

    @Post('login')
    @HttpCode(200)
    login(@Body() loginDTO: LoginDTO) {
        return this.authService.login(loginDTO);
    }
}