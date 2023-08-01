import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PackageDetails } from '../../package_details/entities/package_details.entity';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @OneToMany(() => PackageDetails, (packageDetails) => packageDetails.package)
  packageDetails: PackageDetails[];

  @OneToMany(() => Subscription, (subscription) => subscription.package)
  subscriptions: Subscription[];
}
