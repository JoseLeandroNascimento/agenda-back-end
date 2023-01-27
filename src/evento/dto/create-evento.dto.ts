import { IsString, IsJSON,IsDateString} from "class-validator";

export class CreateEventoDto {

    @IsString()
    title:string;

    @IsDateString()
    dateInicio:Date;

    @IsDateString()
    dateTermino:Date;

    @IsString()
    descricao?:string = "";

    @IsJSON()
    data?:any = "{}";
}
