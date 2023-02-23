import { IsNotEmpty } from 'class-validator';

export class CreatePesticideDto {
    
    @IsNotEmpty()
    settime:number;

    @IsNotEmpty()
    linename:string;

    @IsNotEmpty()
    onoff : Boolean;

    @IsNotEmpty()
    day:number;
}