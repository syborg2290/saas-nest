import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Get()
    findAll(): Promise<Role[]> {
        return this.roleService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Role> {
        return this.roleService.findById(id);
    }

    @Post()
    create(@Body() roleData: Partial<Role>): Promise<Role> {
        return this.roleService.create(roleData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() roleData: Partial<Role>): Promise<Role> {
        return this.roleService.update(id, roleData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.roleService.delete(id);
    }
}
