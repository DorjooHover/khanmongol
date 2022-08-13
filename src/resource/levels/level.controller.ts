import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LevelCreateDto, LevelUpdateDto } from "./dto";
import { LevelService } from "./level.service";

@Controller('level')
export class LevelController {
    constructor(private service: LevelService) {}

    @Post()
    create(@Body() dto: LevelCreateDto) {
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

    @Put('/:name')
    edit(@Param('name') name:string, @Body() dto: LevelUpdateDto) {
        return this.service.edit(name, dto)

    }

    @Delete('/:name')
    delete(@Param('name') name:string) {
        return this.service.delete(name)
    }
}