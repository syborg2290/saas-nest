import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Entity()
export class Subscriber {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @OneToMany(() => Subscription, (subscription) => subscription.subscriber)
    subscriptions: Subscription[];
}
