import { Controller } from "@nestjs/common";

@Controller()
export class PesticideController {
    constructor(private pesticideService : PesticideService){}

    
}