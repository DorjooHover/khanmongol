import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CategoryCreateDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsNotEmpty()
    @ApiProperty()
    @IsArray()
    teachers: [{
        id: string
    }]
    
    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    levels: [{
        id: string
    }]
    
    @ApiProperty()
    @IsBoolean()
    isActive?: boolean
}

export class CategoryUpdateDto {
    @IsString()
    @ApiProperty()
    name: string
    
    @ApiProperty()
    @IsArray()
    teachers: [{
        id: string
    }]
    
    @ApiProperty()
    @IsArray()
    levels: [{
        id: string
    }]
    
    @ApiProperty()
    @IsBoolean()
    isActive?: boolean
}