import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectRepository(Subscription)
        private readonly subscriptionRepository: Repository<Subscription>,
    ) { }

    findAll(): Promise<Subscription[]> {
        return this.subscriptionRepository.find();
    }

    findById(id: number): Promise<Subscription> {
        return this.subscriptionRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(subscriptionData: Partial<Subscription>): Promise<Subscription> {
        return this.subscriptionRepository.save(subscriptionData);
    }

    update(id: number, subscriptionData: Partial<Subscription>): Promise<Subscription> {
        return this.subscriptionRepository.update(id, subscriptionData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.subscriptionRepository.delete(id);
    }
}
