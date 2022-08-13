import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "./dto/userCreate.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private service: UserService) {}

    @Post('test')
    test(@Body() dto:UserDto) {
        return  dto
    }
}