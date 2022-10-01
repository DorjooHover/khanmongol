import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class LevelCreateDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @ApiProperty()
    @IsArray()
    categories: [{
        id:string
    }]

}

export class LevelUpdateDto {
    @IsString()
    @ApiProperty()
    name?: string

    @IsArray()
    @ApiProperty()
    categories?: [{
        id:string
    }]
}