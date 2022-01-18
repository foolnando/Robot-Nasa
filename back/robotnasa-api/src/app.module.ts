import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { RobotsModule } from './robots/robots.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RobotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
