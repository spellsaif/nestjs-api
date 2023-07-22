import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class RegisterDTO {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}