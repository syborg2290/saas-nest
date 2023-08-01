import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity()
export class WorkSpace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Employee, (employee) => employee.workSpace)
    employees: Employee[];
}
