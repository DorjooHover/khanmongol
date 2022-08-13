import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryCreateDto } from "./dto";

@Controller('category')
export class CategoryController {
    constructor(private service: CategoryService) {}
    @Post('')
    create(@Body() dto: CategoryCreateDto) {
        return this.service.create(dto)
    }

    @Get('')
    shows() {
        return this.service.shows()
    }

    @Get('/:name')
    show(@Param('name') name:string) {

        return this.service.show(name)
    }

    @Put('/:name')
    edit(@Param('name') name:string, @Body() dto: CategoryCreateDto) {
        return this.service.edit(name, dto)
    }

    @Delete('/:name')
    delete(@Param('name') name:string) {
        return this.service.delete(name)
    }
}