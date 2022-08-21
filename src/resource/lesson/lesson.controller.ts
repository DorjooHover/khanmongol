import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LessonCreateDto, LessonUpdateDto } from "./dto/lesson.dto";
import { LessonService } from "./lesson.service";

@Controller('lesson')
export class LessonController {
    constructor(private service: LessonService) {}

    @Post()
    create(@Body() dto: LessonCreateDto) {
        return this.service.create(dto)
    }

    @Get()
    shows() {
        return this.service.shows()
    }

    @Get('/:name')
    show(@Param('name') name:string) {
        return this.service.show(name)
    }

    @Get('teacher/:email')
    showByTeacher(@Param('email') email:string) {
        return this.service.showByTeacher(email)
    }

    @Get('level/:id')
    showByLevel(@Param('id') id:string) {
        return this.service.showByLevel(id)
    }

    @Put('/:name')
    edit(@Param('name') name:string, @Body() dto: LessonUpdateDto) {
        return this.service.edit(name, dto)
    }

    @Delete('/:name')
    delete(@Param('name') name:string) {
        return this.service.delete(name)
    }

}