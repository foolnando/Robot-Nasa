import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RobotRepository } from './robot.repository';
import { RobotsService } from './robots.service';
import { RobotsController } from './robots.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RobotRepository])],
    providers: [RobotsService],
    controllers: [RobotsController],
})
export class RobotsModule {}
