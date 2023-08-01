import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';
import { Package } from './entities/package.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Package])],
    controllers: [PackageController],
    providers: [PackageService],
})
export class PackageModule { }
