import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) { }

    async findAll(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    async findById(id: number): Promise<Employee> {
        return this.employeeRepository.findOne({
            where: [{ id }],
        });
    }

    async create(employeeData: Partial<Employee>): Promise<Employee> {
        const newEmployee = this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(newEmployee);
    }

    async update(id: number, employeeData: Partial<Employee>): Promise<Employee> {
        await this.employeeRepository.update(id, employeeData);
        return this.employeeRepository.findOne({
            where: [{ id }],
        });
    }

    async delete(id: number): Promise<void> {
        await this.employeeRepository.delete(id);
    }
}
