import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { UserService } from '../../user/user.service';
import { strongSecret } from '../../utils/generate-secret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || strongSecret,
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.userService.findById(payload.sub);
        if (!user) {
            throw new UnauthorizedException('Invalid token');
        }
        return user;
    }
}
