import { AccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateFertilizerDto } from './dto/create-button.dto';
import { Request } from 'express';
import { FertilizerService } from './fertilizer.service';
import { FertilizerEntity } from './fertilizer.entity';

@Controller('fertilizer')
@UseGuards(AccessTokenGuard)
export class FertilizerController {
    constructor(private fertilizerService : FertilizerService){ }

    @Post()
    @UsePipes(ValidationPipe)
    createFertilizerButton(@Body() createFertilizerDto : CreateFertilizerDto,
    @Req() req:Request) : Promise<FertilizerEntity>{
        return this.fertilizerService.createFertilizerButton(createFertilizerDto,req.user);
    }
}