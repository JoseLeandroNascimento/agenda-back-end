import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  async create(@Body() createEventoDto: CreateEventoDto):Promise<Evento> {

    const evento:Evento = await this.eventoService.create(createEventoDto);

    if(!evento){
      throw new NotFoundException();
    }

    return evento

  }

  @Get()
  findAll() {

    return this.eventoService.findAll();

  }

  @Get(':id')
  async findOne(@Param('id') id: string) :Promise<Evento>{

    const evento:Evento = await this.eventoService.findOne(+id);

    if(!evento){

      throw new NotFoundException(`Evento with Id = ${id} not found`);
    }

    return evento
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto): Promise<Evento>{

    const evento:Evento = await this.findOne(id);

    if(!evento){

      throw new NotFoundException(`Evento with Id = ${id} not found`);
    } 

    return await this.eventoService.update(+id, updateEventoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    const evento:Evento = await this.findOne(id);

    if(!evento){

      throw new NotFoundException(`Evento with Id = ${id} not found`);
    }

    return this.eventoService.remove(+id);
  }

  @Get("month/:ano/:mes")
  async getEventosMonth(@Param("ano") ano:number, @Param('mes') mes:number):Promise<Array<Evento>>{

    
    const eventos: Array<Evento> = await this.eventoService.getEventosMonth(ano,mes);

    return eventos;
  }

  @Get("filter/:date")
  async filterEventos(@Param('date') date:Date):Promise<Array<Evento>>{
    
    return this.eventoService.filterEventos(date);
  }
}
