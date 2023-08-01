import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { Subscriber } from './entities/subscriber.entity';

@Controller('subscribers')
export class SubscriberController {
    constructor(private readonly subscriberService: SubscriberService) { }

    @Get()
    findAll(): Promise<Subscriber[]> {
        return this.subscriberService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Subscriber> {
        return this.subscriberService.findById(id);
    }

    @Post()
    create(@Body() subscriberData: Partial<Subscriber>): Promise<Subscriber> {
        return this.subscriberService.create(subscriberData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() subscriberData: Partial<Subscriber>): Promise<Subscriber> {
        return this.subscriberService.update(id, subscriberData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.subscriberService.delete(id);
    }
}
