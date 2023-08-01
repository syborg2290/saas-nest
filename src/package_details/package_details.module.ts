import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageDetailsController } from './package_details.controller';
import { PackageDetailsService } from './package_details.service';
import { PackageDetails } from './entities/package_details.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PackageDetails])],
    controllers: [PackageDetailsController],
    providers: [PackageDetailsService],
})
export class PackageDetailsModule { }
