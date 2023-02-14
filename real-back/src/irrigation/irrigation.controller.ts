import { AuthGuard } from '@nestjs/passport';
import { Irrigation } from './irrigation.entity';
import { CreateButtonDto } from './dto/create-button.dto';
import { IrrigationService } from './irrigation.service';
import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { AccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { Request } from 'express';

@Controller('irrigation')
@UseGuards(AccessTokenGuard)
export class IrrigationController {
    constructor(private irrigationService: IrrigationService) { }

    @Get()
    getAllButton(
        @Req() req : Request
    ): Promise<Irrigation[]>{
        return this.irrigationService.getAllButtons(req.user);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createButton(@Body() createbuttonDto: CreateButtonDto,
    @Req() req:Request): Promise<Irrigation>{
        console.log(req.user)
        return this.irrigationService.createButton(createbuttonDto, req.user);
    }

}
