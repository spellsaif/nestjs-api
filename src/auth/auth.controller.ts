import { Body, Controller, Post } from "@nestjs/common";
import LoginDTO from "./dto/login.dto";
import RegisterDTO from "./dto/register.dto";

@Controller('auth')
export class AuthController {

    @Post('register')
    register(@Body() registerDTO: RegisterDTO) {
        return "user is registered!"
    }

    @Post('login')
    login(@Body() loginDTO: LoginDTO) {
        return "User logged in successfully!"
    }
}