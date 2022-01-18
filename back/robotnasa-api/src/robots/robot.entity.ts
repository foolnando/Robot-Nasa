import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class Robot {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    command: string;

    @CreateDateColumn()
    createdAt: string;

    @Column()
    initialPos: string;

    @Column()
    finalPos: string;

    @Column()
    isValid: boolean;

}
