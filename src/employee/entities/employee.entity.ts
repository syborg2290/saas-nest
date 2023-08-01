import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { WorkSpace } from '../../workspace/entities/workspace.entity';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column({ type: 'date' })
    joinDate: Date;

    @ManyToOne(() => WorkSpace, (workSpace) => workSpace.employees)
    workSpace: WorkSpace;
}
