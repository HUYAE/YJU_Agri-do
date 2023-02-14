import { Irrigation } from './irrigation.entity';
import { Repository, DataSource } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { CreateButtonDto } from './dto/create-button.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class IrrigationRepository extends Repository<Irrigation>{
    constructor(private dataSource : DataSource){
        super(Irrigation, dataSource.createEntityManager());
    }
    async createButton(createbuttonDto:CreateButtonDto, user:{[key : string]:any}): Promise<Irrigation>{
        const user1 = await User.findOneBy({id : user['sub']});
        const {settime,linename,onoff} = createbuttonDto;

        const button = this.create({
            settime,
            linename,
            onoff,
            user : user1
        })
        console.log(user);
        await this.save(button);
        return button;
    }
}