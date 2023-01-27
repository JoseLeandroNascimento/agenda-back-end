
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    title:string;

    @Column('datetime')
    dateInicio:Date;

    @Column('datetime')
    dateTermino:Date;

    @Column('text')
    descricao?:string;

    @Column('json')
    data?:any;
}
