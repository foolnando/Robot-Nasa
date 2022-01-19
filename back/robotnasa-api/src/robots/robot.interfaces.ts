interface CreateCommandRes{
    createdAt: string
    command: string
    finalPosition: string
    initialPosition: string
  } 

interface CreateCommandReq{
    command: string
}

interface RobotPosition{
    x: number
    y: number
    dir: string 
}

export  {CreateCommandRes, CreateCommandReq, RobotPosition}