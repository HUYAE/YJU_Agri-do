import { CreateFertilizerDto } from './dto/create-button.dto';
import { FertilizerRepository } from './fertilizer.repository';
import { InjectRepository } from "@nestjs/typeorm";
import { FertilizerEntity } from './fertilizer.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FertilizerService {
    constructor(
        @InjectRepository(FertilizerRepository)
        private fertilizerRepository : FertilizerRepository,
    ){}

    createFertilizerButton(createFertilizerDto:CreateFertilizerDto,user:{[key:string]:any}):Promise<FertilizerEntity>{
        return this.fertilizerRepository.createFertilizerButton(createFertilizerDto,user);
    }
}