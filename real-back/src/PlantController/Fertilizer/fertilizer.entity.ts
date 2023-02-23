import { User } from "src/auth/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FertilizerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable : true})
    settime:number;

    @Column({nullable : true})
    linename:string;

    @Column({ default : false})
    onoff : Boolean;

    @CreateDateColumn() //string으로 들어온다치면 012 string을 하나씩 끊어서 작동시키게
    date : Date;

    @CreateDateColumn()
    start_time : Date;

    @Column()
    day : number;

    @ManyToOne(type=>User, user=>user.fertilizers,{eager : false})
    user: User;
}