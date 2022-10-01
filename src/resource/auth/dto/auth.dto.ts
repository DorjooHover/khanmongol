import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthCreateUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastname: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    firstname: string

    @IsNotEmpty()
    @ApiProperty()
    @IsBoolean()
    isGoogle: boolean
}

export class AuthLoginUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isGoogle: boolean
}