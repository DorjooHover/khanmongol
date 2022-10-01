import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CommentCreateDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    comment: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email:string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lesson:string
    
    @IsString()
    @ApiProperty()
    parentId:string
}
export class CommentUpdateDto {
    @IsString()
    @ApiProperty()
    comment: string
    
    @IsString()
    @ApiProperty()
    email:string
    
    @IsString()
    @ApiProperty()
    lesson:string
    
    @IsString()
    @ApiProperty()
    parentId:string
}