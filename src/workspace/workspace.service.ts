import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkSpace } from './entities/workspace.entity';

@Injectable()
export class WorkSpaceService {
    constructor(
        @InjectRepository(WorkSpace)
        private readonly workSpaceRepository: Repository<WorkSpace>,
    ) { }

    findAll(): Promise<WorkSpace[]> {
        return this.workSpaceRepository.find();
    }

    findById(id: number): Promise<WorkSpace> {
        return this.workSpaceRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(workSpaceData: Partial<WorkSpace>): Promise<WorkSpace> {
        return this.workSpaceRepository.save(workSpaceData);
    }

    update(id: number, workSpaceData: Partial<WorkSpace>): Promise<WorkSpace> {
        return this.workSpaceRepository.update(id, workSpaceData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.workSpaceRepository.delete(id);
    }
}
