import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) { }

    findAll(): Promise<Role[]> {
        return this.roleRepository.find();
    }

    findById(id: number): Promise<Role> {
        return this.roleRepository.findOne({
            where: [{ id }],
        });
    }

    create(roleData: Partial<Role>): Promise<Role> {
        return this.roleRepository.save(roleData);
    }

    update(id: number, roleData: Partial<Role>): Promise<Role> {
        return this.roleRepository.update(id, roleData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.roleRepository.delete(id);
    }
}
