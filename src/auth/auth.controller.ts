import { Body, Controller, Post } from "@nestjs/common";
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
    login(@Body() loginDTO: LoginDTO) {
        return "User logged in successfully!"
    }
}