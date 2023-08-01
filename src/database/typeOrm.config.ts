import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

// Load environment variables from the .env file
config();

// Create a ConfigService instance to access configuration values
const configService = new ConfigService();

// Function to build the DataSource configuration
const buildDataSource = () => {
    // Return a new DataSource instance with the configuration options
    return new DataSource({
        // Specify the type of the database, in this case, PostgreSQL
        type: 'postgres',
        // Retrieve the database host from the ConfigService
        host: configService.get('POSTGRES_HOST'),
        // Retrieve the database port from the ConfigService
        port: configService.get('POSTGRES_PORT'),
        // Retrieve the database username from the ConfigService
        username: configService.get('POSTGRES_USER'),
        // Retrieve the database password from the ConfigService
        password: configService.get('POSTGRES_PASSWORD'),
        // Retrieve the database name from the ConfigService
        database: configService.get('POSTGRES_DB'),
        // Specify the entity files to be used by TypeORM
        entities: ["./src/**/*entity.{ts,js}"],
        // Specify the migration files to be used by TypeORM
        migrations: [
            "./src/database/migrations/**/*.{ts,js}"
        ],
    });
}

// Export the DataSource configuration created by the buildDataSource function
export default buildDataSource();
