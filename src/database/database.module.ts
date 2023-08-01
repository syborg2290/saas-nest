import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

// Load environment variables from the .env file
config();

@Module({
  imports: [
    // Import the TypeOrmModule configuration asynchronously using forRootAsync.
    TypeOrmModule.forRootAsync({
      // Import the ConfigModule to access configuration values.
      imports: [ConfigModule],
      // Inject the ConfigService to access configuration values.
      inject: [ConfigService],
      // Define a factory function that returns the TypeOrmModule options.
      useFactory: (configService: ConfigService) => ({
        // Type of the database, in this case, PostgreSQL.
        type: 'postgres',
        // Retrieve the host value from the ConfigService.
        host: configService.get('POSTGRES_HOST'),
        // Retrieve the port value from the ConfigService.
        port: configService.get('POSTGRES_PORT'),
        // Retrieve the username value from the ConfigService.
        username: configService.get('POSTGRES_USER'),
        // Retrieve the password value from the ConfigService.
        password: configService.get('POSTGRES_PASSWORD'),
        // Retrieve the database name value from the ConfigService.
        database: configService.get('POSTGRES_DB'),
        // Automatically load entities from the specified directories.
        autoLoadEntities: true,
        // Synchronize database schema on application start.
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule { }
