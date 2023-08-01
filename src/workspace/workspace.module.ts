import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkSpaceController } from './workspace.controller';
import { WorkSpaceService } from './workspace.service';
import { WorkSpace } from './entities/workspace.entity';
import { Employee } from '../employee/entities/employee.entity';

@Module({
    imports: [TypeOrmModule.forFeature([WorkSpace, Employee])], // Don't forget to import Employee entity as well
    controllers: [WorkSpaceController],
    providers: [WorkSpaceService],
})
export class WorkSpaceModule { }
