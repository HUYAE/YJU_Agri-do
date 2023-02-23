import { IsNotEmpty } from 'class-validator';

export class CreateFertilizerDto {

    @IsNotEmpty()
    settime:number;

    @IsNotEmpty()
    linename:string;

    @IsNotEmpty()
    onoff : Boolean;

    @IsNotEmpty()
    day : number;

}