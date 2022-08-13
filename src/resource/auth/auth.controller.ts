import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "../user/dto/userCreate.dto";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { AuthCreateUserDto, AuthLoginUserDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService ) {}

    @Post('create')
    create(@Body() dto: AuthCreateUserDto) {
        return this.authService.createUser(dto)
    }

    @Post('login')
    login(@Body() dto: AuthLoginUserDto) {
        return this.authService.login(dto)
    }

    @Post('logout')
    logout() {
        return this.authService.logout()
    }

}