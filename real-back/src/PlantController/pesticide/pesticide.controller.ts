import { AccessTokenGuard } from '../../auth/guard/accessToken.guard';
import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePesticideDto } from "./dto/create-button.dto";
import { PesticideEntity } from "./pesticide.entity";
import { PesticideService } from "./pesticide.service";
import { Request } from 'express';

@Controller('pesticide')
@UseGuards(AccessTokenGuard)
export class PesticideController {
    constructor(private pesticideService : PesticideService){}

    @Post()
    @UsePipes(ValidationPipe)
    createPesticideButton(@Body() createPesticideDto:CreatePesticideDto,
    @Req() req:Request): Promise<PesticideEntity>{
        return this.pesticideService.createPesticideButton(createPesticideDto,req.user);
    }


}