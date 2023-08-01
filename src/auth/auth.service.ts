import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findUserByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }

    async login(user: any): Promise<string> {
        const payload = { sub: user.id, username: user.username };
        return this.jwtService.sign(payload);
    }
}
