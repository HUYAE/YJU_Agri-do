import { User } from '../../auth/user.entity';
import { PesticideEntity } from './pesticide.entity';
import { Repository, DataSource } from 'typeorm';
import { CreatePesticideDto } from './dto/create-button.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PesticideRepository extends Repository<PesticideEntity>{
    constructor(private dataSource : DataSource){
        super(PesticideEntity, dataSource.createEntityManager());
    }
    async createPesticideButton(createPesticideDto : CreatePesticideDto, user:{[key:string]:any}):Promise<PesticideEntity>{
        const user1 = await User.findOneBy({id : user['sub']});
        const {settime,linename,onoff,day} = createPesticideDto;

        const pesticideButton = this.create({
            settime,
            linename,
            onoff,
            day,
            user : user1
        })

        await this.save(pesticideButton);
        return pesticideButton;
    }
}