import {BaseEntity,PrimaryGeneratedColumn,Column, Entity, ManyToOne, CreateDateColumn} from "typeorm";
import { User } from 'src/auth/user.entity';

@Entity()
export class Irrigation extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable : true})
    settime:number;

    @Column({nullable : true})
    linename:string;

    @Column({ default : false})
    onoff : Boolean;

    @CreateDateColumn()
    date : Date;

    @CreateDateColumn()
    start_time : Date;

    @ManyToOne(type=>User, user=>user.irrigations,{eager : false})
    user: User;
}