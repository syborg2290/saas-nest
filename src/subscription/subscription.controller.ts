import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './entities/subscription.entity';

@Controller('subscriptions')
export class SubscriptionController {
    constructor(private readonly subscriptionService: SubscriptionService) { }

    @Get()
    findAll(): Promise<Subscription[]> {
        return this.subscriptionService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Promise<Subscription> {
        return this.subscriptionService.findById(id);
    }

    @Post()
    create(@Body() subscriptionData: Partial<Subscription>): Promise<Subscription> {
        return this.subscriptionService.create(subscriptionData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() subscriptionData: Partial<Subscription>): Promise<Subscription> {
        return this.subscriptionService.update(id, subscriptionData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.subscriptionService.delete(id);
    }
}
