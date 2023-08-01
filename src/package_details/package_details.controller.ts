import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PackageDetailsService } from './package_details.service';
import { PackageDetails } from './entities/package_details.entity';

@Controller('package-details')
export class PackageDetailsController {
    constructor(private readonly packageDetailsService: PackageDetailsService) { }

    @Get()
    findAll(): Promise<PackageDetails[]> {
        return this.packageDetailsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<PackageDetails> {
        return this.packageDetailsService.findById(id);
    }

    @Post()
    create(@Body() packageDetailsData: Partial<PackageDetails>): Promise<PackageDetails> {
        return this.packageDetailsService.create(packageDetailsData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() packageDetailsData: Partial<PackageDetails>): Promise<PackageDetails> {
        return this.packageDetailsService.update(id, packageDetailsData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.packageDetailsService.delete(id);
    }
}
