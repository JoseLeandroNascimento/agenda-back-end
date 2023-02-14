
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    title:string;

    @Column({type:"datetime"})
    dateInicio:Date;

    @Column({type:"datetime"})
    dateTermino:Date;

    @Column('text')
    descricao?:string;

    @Column('json')
    data?:any;
}
