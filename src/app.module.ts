import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { WorkSpaceModule } from './workspace/workspace.module';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PackageModule } from './package/package.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { PackageDetailsModule } from './package_details/package_details.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    WorkSpaceModule,
    EmployeeModule,
    UserModule,
    RoleModule,
    PackageModule,
    SubscriptionModule,
    SubscriberModule,
    PackageDetailsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
