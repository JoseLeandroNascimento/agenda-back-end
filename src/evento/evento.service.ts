import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento) private readonly repo: Repository<Evento>,
  ) {}

  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const evento: Evento = await this.repo.create(createEventoDto);

    return await this.repo.save(evento);
  }

  async findAll(): Promise<Array<Evento>> {
    const eventos: Array<Evento> = await this.repo.find();

    return eventos;
  }

  async findOne(id: number): Promise<Evento> {
    const evento: Evento = await this.repo.findOne({ where: { id } });

    return evento;
  }

  async update(id: number, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    const evento: Evento = await this.repo.preload({ id, ...updateEventoDto });

    return this.repo.save(evento);
  }

  async remove(id: number) {
    this.repo.delete(id);
  }

  async getEventosMonth(ano: number, mes: number): Promise<Array<Evento>> {
    const dateInicio: Date = new Date(ano, mes, 1);
    const dateTermino: Date = new Date(
      ano,
      mes,
      new Date(ano, mes + 1, 0).getDate(),
    );

    const eventos: Array<Evento> = await this.repo.find({
      where: {
        dateInicio: Between(dateInicio, dateTermino),
      },
    });

    return eventos;
  }

  async filterEventos(date: Date): Promise<Array<Evento>> {


    const eventos: Array<Evento> = await (await this.findAll()).filter((evento)=>{
      return this.isDateInDates(evento.dateInicio,evento.dateTermino,date)
    })

    return eventos;
  }

  private isDateInDates(dateInicio:Date,dateTermino:Date,dateActual:Date):boolean{
    
    const date1: Date = this.getDateExact(dateActual);
    const date2: Date = this.getDateExact(dateInicio);
    const date3: Date = this. getDateExact(dateTermino);
    
    return  date1.getTime()>= date2.getTime() && date1.getTime() <= date3.getTime();

  }


  private getDateExact(date:Date):Date{
        
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
  
    return date;
  }
}
