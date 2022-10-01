import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LessonCreateDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    videoUrl: string

    @IsString()
    @ApiProperty()
    description:string

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    level:string

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    category: string

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    teacher: string
}

export class LessonUpdateDto {
    @IsString()
    @ApiProperty()
    name:string

    @IsString()
    @ApiProperty()
    videoUrl: string

    @IsString()
    @ApiProperty()
    description:string

    @IsString()
    @ApiProperty()
    level:string

    @IsString()
    @ApiProperty()
    category: string

    @IsString()
    @ApiProperty()
    teacher: string
}