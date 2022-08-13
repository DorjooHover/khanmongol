import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthCreateUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    lastname: string

    @IsNotEmpty()
    @IsString()
    firstname: string

    @IsNotEmpty()
    @IsBoolean()
    isGoogle: boolean
}

export class AuthLoginUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @IsBoolean()
    isGoogle: boolean
}