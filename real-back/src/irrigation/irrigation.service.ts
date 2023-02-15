import { User } from 'src/auth/user.entity';
import { IrrigationRepository } from './irrigation.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateButtonDto } from './dto/create-button.dto';
import { Irrigation } from './irrigation.entity';
import { Request } from 'express';

@Injectable()
export class IrrigationService {
    constructor(
        @InjectRepository(IrrigationRepository)
        private irrigationRepository : IrrigationRepository,
    ){}

    async getAllButtons(
        user:{[key : string] : any}
    ): Promise<Irrigation[]>{
        const query = this.irrigationRepository.createQueryBuilder('irrigation');
        query.where('irrigation.userId = :userId',{userId : user['sub']});
        const buttons = await query.getMany();
        return buttons;
    }

    createButton(createButtonDto : CreateButtonDto,user:{[key : string] : any}) : Promise<Irrigation>{
        return this.irrigationRepository.createButton(createButtonDto,user);
    }
}
