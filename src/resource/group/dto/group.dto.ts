import { IsArray, IsNotEmpty, IsString } from "class-validator";


export class GroupCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    categories: [{
        id: string
    }]
    
    @IsNotEmpty()
    @IsArray()
    students: [{
        id: string
    }]

    @IsNotEmpty()
    @IsArray()
lessons: [{
        id: string
    }]

    @IsNotEmpty()
    @IsString()    
    teacher: string

    @IsNotEmpty()
    @IsString()
    level: string

}

export class GroupUpdateDto {
    @IsString()
    name: string

    @IsArray()
    categories: [{
        id: string
    }]
    
    @IsArray()
    students: [{
        id: string
    }]

    @IsArray()
    lessons: [{
        id: string
    }]

    @IsString()    
    teacher: string

    @IsString()
    level: string
}