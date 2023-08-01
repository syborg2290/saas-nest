import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Package } from '../../package/entities/package.entity';

@Entity()
export class PackageDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    details: string;

    @ManyToOne(() => Package, (packageE) => packageE.packageDetails)
    package: Package;
}
