interface CreateCommandRes{
    createdAt: string
    command: string
    finalPosition: string
  } 

interface CreateCommandReq{
    command: string
    flag: number
}

interface RobotPosition{
    x: number
    y: number
    dir: string 
}

export  {CreateCommandRes, CreateCommandReq, RobotPosition}