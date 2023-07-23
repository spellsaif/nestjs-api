import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import LoginDTO from "./dto/login.dto";
import RegisterDTO from "./dto/register.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

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