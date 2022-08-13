import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class LevelCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsArray()
    categories: [{
        id:string
    }]

}

export class LevelUpdateDto {
    @IsString()
    name?: string

    @IsArray()
    categories?: [{
        id:string
    }]
}