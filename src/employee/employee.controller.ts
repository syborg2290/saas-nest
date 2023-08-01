import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    findAll(): Promise<Employee[]> {
        return this.employeeService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Employee> {
        return this.employeeService.findById(id);
    }

    @Post()
    create(@Body() employeeData: Partial<Employee>): Promise<Employee> {
        return this.employeeService.create(employeeData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() employeeData: Partial<Employee>): Promise<Employee> {
        return this.employeeService.update(id, employeeData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.employeeService.delete(id);
    }
}
