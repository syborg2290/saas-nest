import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findById(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async findUserByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username } });
    }

    async create(userData: Partial<User>): Promise<User> {
        // Hash the password using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

        // Save the hashed password to the user data before saving to the database
        const userToSave: Partial<User> = {
            ...userData,
            password: hashedPassword,
        };

        return this.userRepository.save(userToSave);
    }

    update(id: number, userData: Partial<User>): Promise<User> {
        return this.userRepository.update(id, userData).then(() => this.findById(id));
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
