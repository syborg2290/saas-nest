import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Subscriber } from '../../subscriber/entities/subscriber.entity';
import { Package } from '../../package/entities/package.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column()
  status: string; // Active, Expired, Suspended, etc.

  @ManyToOne(() => Subscriber, (subscriber) => subscriber.subscriptions)
  subscriber: Subscriber;

  @ManyToOne(() => Package, (packageE) => packageE.subscriptions)
  package: Package;

}
