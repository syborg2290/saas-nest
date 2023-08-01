import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { strongSecret } from '../utils/generate-secret';

config();

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || strongSecret,
            signOptions: { expiresIn: '1d' }, // JWT expiration time
        }),
        UserModule, // You need to create a 'users' module for handling user data
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule { }
