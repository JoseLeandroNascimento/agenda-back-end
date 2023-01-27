import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [EventoModule,TypeOrmModule.forRoot({
    port:3306,
    type:'mysql',
    database:'agenda',
    host:'localhost',
    password:'root',
    username:'root',
    autoLoadEntities:true,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
