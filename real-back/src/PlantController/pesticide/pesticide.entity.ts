import { User } from 'src/auth/user.entity';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PesticideEntity extends BaseEntity{
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

    @Column()
    day : number;

    @ManyToOne(type=>User, user=>user.pesticides,{eager : false})
    user: User;
}