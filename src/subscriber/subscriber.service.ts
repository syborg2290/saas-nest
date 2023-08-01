import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscriber } from './entities/subscriber.entity';

@Injectable()
export class SubscriberService {
    constructor(
        @InjectRepository(Subscriber)
        private readonly subscriberRepository: Repository<Subscriber>,
    ) { }

    findAll(): Promise<Subscriber[]> {
        return this.subscriberRepository.find();
    }

    findById(id: number): Promise<Subscriber> {
        return this.subscriberRepository.findOne({
            where: {
                id: id
            }
        });
    }

    create(subscriberData: Partial<Subscriber>): Promise<Subscriber> {
        return this.subscriberRepository.save(subscriberData);
    }

    update(id: number, subscriberData: Partial<Subscriber>): Promise<Subscriber> {
        return this.subscriberRepository.update(id, subscriberData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.subscriberRepository.delete(id);
    }
}
