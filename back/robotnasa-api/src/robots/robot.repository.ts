import { EntityRepository, Repository } from 'typeorm';
import { Robot } from './robot.entity';

@EntityRepository(Robot)
export class RobotRepository extends Repository<Robot> {}