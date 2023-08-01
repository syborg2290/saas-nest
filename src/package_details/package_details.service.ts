import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackageDetails } from './entities/package_details.entity';

@Injectable()
export class PackageDetailsService {
    constructor(
        @InjectRepository(PackageDetails)
        private readonly packageDetailsRepository: Repository<PackageDetails>,
    ) { }

    findAll(): Promise<PackageDetails[]> {
        return this.packageDetailsRepository.find();
    }

    findById(id: number): Promise<PackageDetails> {
        return this.packageDetailsRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(packageDetailsData: Partial<PackageDetails>): Promise<PackageDetails> {
        return this.packageDetailsRepository.save(packageDetailsData);
    }

    update(id: number, packageDetailsData: Partial<PackageDetails>): Promise<PackageDetails> {
        return this.packageDetailsRepository.update(id, packageDetailsData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.packageDetailsRepository.delete(id);
    }
}
