import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentCreateDto, CommentUpdateDto } from "./dto/comment.dto";

@Controller('comment')
export class CommentController {
    constructor(private service:CommentService) {}

    @Post()
    create(@Body() dto:CommentCreateDto) {
        return this.service.create(dto)
    }

    @Get()
    shows() {
        return this.service.shows()
    }

    @Get('/:lesson')
    show(@Param('lesson') lesson:string) {
        return this.service.show(lesson)
    }

    @Get('email/:email')
    showByEmail(@Param('email') email:string) {
        return this.service.showByEmail(email)
    }

    @Put('/:id')
    edit(@Param('id') id:string, dto:CommentUpdateDto) {
        return this.service.edit(id, dto)
    }

    @Delete('/:id')
    delete(@Param('id') id:string) {
        return this.service.delete(id)
    }
    
}