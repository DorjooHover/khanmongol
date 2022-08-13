import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GroupCreateDto, GroupUpdateDto } from "./dto/group.dto";
import { GroupService } from "./group.service";

@Controller('group')
export class GroupController {
    constructor(private service: GroupService) {}
    
    @Post()
    create(@Body() dto: GroupCreateDto) {
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
    edit(@Param('name') name:string, dto:GroupUpdateDto) {
        return this.service.edit(name, dto)
    }

    @Delete('/:name')
    delete(@Param('name') name:string) {
        return this.service.delete(name)
    }
     
}