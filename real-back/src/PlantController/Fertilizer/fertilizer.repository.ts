import { CreateFertilizerDto } from './dto/create-button.dto';
import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { FertilizerEntity } from './fertilizer.entity';import { User } from 'src/auth/user.entity';
''
@Injectable()
export class FertilizerRepository extends Repository<FertilizerEntity>{
    constructor(private dataSource : DataSource){
        super(FertilizerEntity,dataSource.createEntityManager());
    }
    async createFertilizerButton(createFertilizerDto:CreateFertilizerDto,user:{[key:string]:any}):Promise<FertilizerEntity>{
        const user1 = await User.findOneBy({id : user['sub']});
        const {settime,linename,onoff,day} = createFertilizerDto;

        const FertilizerButton = this.create({
            settime,
            linename,
            onoff,
            day,
            user : user1
        })
        await this.save(FertilizerButton);
        return FertilizerButton;
    }
}