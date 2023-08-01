import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PackageService } from './package.service';
import { Package } from './entities/package.entity';

@Controller('packages')
export class PackageController {
    constructor(private readonly packageService: PackageService) { }

    @Get()
    findAll(): Promise<Package[]> {
        return this.packageService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Package> {
        return this.packageService.findById(id);
    }

    @Post()
    create(@Body() packageData: Partial<Package>): Promise<Package> {
        return this.packageService.create(packageData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() packageData: Partial<Package>): Promise<Package> {
        return this.packageService.update(id, packageData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.packageService.delete(id);
    }
}
