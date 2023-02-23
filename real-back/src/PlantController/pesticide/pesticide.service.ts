import { PesticideEntity } from './pesticide.entity';
import { CreatePesticideDto } from './dto/create-button.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { PesticideRepository } from "./pesticide.repository";
import { Injectable } from '@nestjs/common';

@Injectable()
export class PesticideService{
    constructor(
        @InjectRepository(PesticideRepository)
        private pesticideRepository : PesticideRepository,
    ){}

    createPesticideButton(createPesticideDto : CreatePesticideDto,user:{[key:string]:any}):Promise<PesticideEntity>{
        return this.pesticideRepository.createPesticideButton(createPesticideDto,user)
    }
}