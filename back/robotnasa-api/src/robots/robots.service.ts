import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RobotRepository } from './robot.repository';
import { Robot } from './robot.entity';
import { CreateCommandReq, CreateCommandRes} from './robot.interfaces';
import InvalidCommand from './robot.error';

@Injectable()
export class RobotsService {
    constructor(
        @InjectRepository(RobotRepository)
        private robotRepository: RobotRepository,
      ) {}

      async newComand(command: string, flag: number = 1): Promise<CreateCommandRes | InvalidCommand>{
        const createdAt = new Date();
        const regex = new RegExp(/^[MRL]+$/);
        let isValid = regex.test(command);
        let isValidMove = true;
        let initialPosition = await this.getLastedPosition();
        let finalPosition;
        if(isValid) finalPosition = this.parseCommand(command, initialPosition);
        else finalPosition = initialPosition;
        if (flag && finalPosition===initialPosition) isValidMove = false;

        
        const robs = new Robot();
        robs.command = command;
        robs.finalPos = finalPosition;
        robs.initialPos = initialPosition;
        robs.isValid = isValid;  

        const result = await this.robotRepository.save(robs);

        if(!isValid){
          return new InvalidCommand('syntax error');
        }

        if (!isValidMove) return new InvalidCommand('semantic error');
        
        return {
                createdAt: result.createdAt,
                command: result.command,
                finalPosition: result.finalPos
              };
      }
     
     changeDirection(lenList: number, init: number, move: number): number{
      let final = init+move;
      if (final >= lenList) return 0;
      if (final < 0) return lenList - 1;
      return final;

     }
     parseCommand(commands:string, initialPos: string): string {
       const directions = ['S','W','N','E']
       const numberDir =  directions.length;
       let posx = parseInt(initialPos[1], 10);
       let posy = parseInt(initialPos[3], 10);
       let dir = initialPos[5];

       const moveForward = {
         N: function(posx:number,posy: number):number[] {
          if (posy+1 <= 4){
            posy++;
            return [posx, posy];
           } else return [-1,-1];
          },
         S: function(posx:number,posy: number):number[]{
          if(posy-1 >= 0){
             posy--;
            return [posx, posy];
          }
          else return [-1,-1];
         },
         W: function(posx:number,posy: number):number[] {
          if(posx-1 >= 0){
            posx--;
           return [posx, posy];
         }
         else return [-1,-1];
         },
         E: function(posx: number,posy: number):number[] {
          if (posx+1 <= 4){
            posx++;
            return [posx, posy];
           } else return [-1,-1];
         },
       }

       for (let command of commands.split("")) {
        switch (command){
          case 'L':
            dir = directions[this.changeDirection(numberDir, directions.indexOf(dir), -1)]
            break;
          case 'R':
           dir = directions[this.changeDirection(numberDir, directions.indexOf(dir), +1)]
           break;
          case 'M':
            posx = moveForward[dir](posx,posy)[0];
            posy = moveForward[dir](posx,posy)[1];
            if (posx == -1 || posy == -1) return initialPos;                  
         }
       }
       return `(${posx},${posy},${dir})`;  
     } 

     async resetPosition(): Promise<CreateCommandRes>{
      const command = '(0,0,N)';
      let isValid = true;
      let isValidMove = true;
      let initialPosition = await this.getLastedPosition();
      let finalPosition = '(0,0,N)';

      const resetedRobot = new Robot();
        resetedRobot.command = command;
        resetedRobot.finalPos = finalPosition;
        resetedRobot.initialPos = initialPosition;
        resetedRobot.isValid = isValid;

        const result = await this.robotRepository.save(resetedRobot);


        return {
          createdAt: result.createdAt,
          command: result.command,
          finalPosition: result.finalPos
        };
     }

     async getLastedPosition(): Promise<string>{
        const pos = await this.robotRepository.findOne({ 
            order: { createdAt: 'DESC' } 
    })
        return pos.finalPos;
         
     }
}
