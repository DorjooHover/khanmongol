import { IsArray, IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CategoryCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsArray()
    teachers: [{
        id: string
    }]
    
    @IsNotEmpty()
    @IsArray()
    levels: [{
        id: string
    }]

    @IsBoolean()
    isActive?: boolean
}

export class CategoryUpdateDto {
    @IsString()
    name: string

    @IsArray()
    teachers: [{
        id: string
    }]
    
    @IsArray()
    levels: [{
        id: string
    }]

    @IsBoolean()
    isActive?: boolean
}