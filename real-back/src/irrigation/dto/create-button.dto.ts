import { IsNotEmpty } from 'class-validator';

export class CreateButtonDto {

    @IsNotEmpty()
    settime:number;

    @IsNotEmpty()
    linename:string;

    @IsNotEmpty()
    onoff : Boolean;

}