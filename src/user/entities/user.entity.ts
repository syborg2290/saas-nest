import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string; // Hashed password

  @Column()
  email: string;

  @Column()
  status: string; // Active, Inactive, Suspended, etc.

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
