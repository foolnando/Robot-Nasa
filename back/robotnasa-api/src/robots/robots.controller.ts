import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import InvalidCommand from './robot.error';
import { CreateCommandReq, CreateCommandRes } from './robot.interfaces';
import { RobotsService } from './robots.service';

@Controller('robots')
export class RobotsController {
  constructor(private robotsService: RobotsService) {}

  @Post()
  async newComand(@Body() body: CreateCommandReq): Promise<CreateCommandRes> {
    const result = await this.robotsService.newComand(body.command);

    if (result instanceof InvalidCommand) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: result.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return result;
  }

  @Post('/reset-position')
  async resetPosition(): Promise<CreateCommandRes> {
    const result = await this.robotsService.resetPosition();
    return result;
  }
}
