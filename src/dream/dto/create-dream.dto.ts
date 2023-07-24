import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateDreamDto {

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    interpretation: string;

    @IsNotEmpty()
    @IsArray()
    symbols: string[]

    @IsNotEmpty()
    @IsArray()
    emotions: string[]


}
