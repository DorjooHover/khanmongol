import { IsNotEmpty, IsString } from "class-validator";

export class CommentCreateDto {
    @IsString()
    @IsNotEmpty()
    comment: string
    
    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    lesson:string

    @IsString()
    parentId:string
}
export class CommentUpdateDto {
    @IsString()
    comment: string
    
    @IsString()
    email:string

    @IsString()
    lesson:string

    @IsString()
    parentId:string
}