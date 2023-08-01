import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<User> {
        return this.userService.findById(id);
    }

    @Post()
    create(@Body() userData: Partial<User>): Promise<User> {
        return this.userService.create(userData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() userData: Partial<User>): Promise<User> {
        return this.userService.update(id, userData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.userService.delete(id);
    }
}
