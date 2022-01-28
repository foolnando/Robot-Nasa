import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'robot_nasa',
  synchronize: true,
  migrationsRun: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migration/*.ts'],
  cli: {
    entitiesDir: '../robots',
    migrationsDir: __dirname + '/../migration',
  },
};

export default typeOrmConfig;
