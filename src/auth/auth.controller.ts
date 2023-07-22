import { Body, Controller, Post } from "@nestjs/common";
import RegisterDTO from "./dto/register.dto";

@Controller('auth')
export class AuthController {

    @Post('register')
    register(@Body() registerDTO: RegisterDTO) {
        return "user is registered!"
    }
}