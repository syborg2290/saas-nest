import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Package } from './entities/package.entity';

@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(Package)
        private readonly packageRepository: Repository<Package>,
    ) { }

    findAll(): Promise<Package[]> {
        return this.packageRepository.find();
    }

    findById(id: number): Promise<Package> {
        return this.packageRepository.findOne({
            where: [{ id }]
        });
    }

    create(packageData: Partial<Package>): Promise<Package> {
        return this.packageRepository.save(packageData);
    }

    update(id: number, packageData: Partial<Package>): Promise<Package> {
        return this.packageRepository.update(id, packageData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.packageRepository.delete(id);
    }
}
