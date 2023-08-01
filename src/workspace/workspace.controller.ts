import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WorkSpaceService } from './workspace.service';
import { WorkSpace } from './entities/workspace.entity';

@Controller('workspaces')
export class WorkSpaceController {
    constructor(private readonly workSpaceService: WorkSpaceService) { }

    @Get()
    findAll(): Promise<WorkSpace[]> {
        return this.workSpaceService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<WorkSpace> {
        return this.workSpaceService.findById(id);
    }

    @Post()
    create(@Body() workSpaceData: Partial<WorkSpace>): Promise<WorkSpace> {
        return this.workSpaceService.create(workSpaceData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() workSpaceData: Partial<WorkSpace>): Promise<WorkSpace> {
        return this.workSpaceService.update(id, workSpaceData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.workSpaceService.delete(id);
    }
}
