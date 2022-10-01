import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string
    
    @IsString() 
    @ApiProperty()
    @IsNotEmpty()
    firstname: string
    
    @ApiProperty()
    @IsString() 
    @IsNotEmpty()
    lastname: string
    
    @ApiProperty()
    @IsString() 
    nickname?: string
    
    @IsNumber()
    @ApiProperty()
    phone?: number
    
    @IsString()
    @ApiProperty()
    profileImg: string
    
    @IsBoolean()
    @ApiProperty()
    isAdmin?: string
    
    @IsBoolean()
    @ApiProperty()
    isTeacher?: string

}