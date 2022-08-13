import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @IsString() 
    @IsNotEmpty()
    firstname: string
    
    @IsString() 
    @IsNotEmpty()
    lastname: string
    
    @IsString() 
    nickname?: string
    
    @IsNumber()
    phone?: number

    @IsString()
    profileImg: string

    @IsBoolean()
    isAdmin?: string

    @IsBoolean()
    isTeacher?: string

}