import { IsNotEmpty, IsString } from "class-validator";

export class LessonCreateDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsString()
    videoUrl: string

    @IsString()
    description:string

    @IsNotEmpty()
    @IsString()
    level:string

    @IsNotEmpty()
    @IsString()
    category: string

    @IsNotEmpty()
    @IsString()
    teacher: string
}

export class LessonUpdateDto {
    @IsString()
    name:string

    @IsString()
    videoUrl: string

    @IsString()
    description:string

    @IsString()
    level:string

    @IsString()
    category: string

    @IsString()
    teacher: string
}