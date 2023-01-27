import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [EventoModule,TypeOrmModule.forRoot({
    port:6960,
    type:'mysql',
    database:'agenda',
    host:'mysql://root:fy0HDhPAWBj8BR9GFICI@containers-us-west-155.railway.app:6960/railway',
    password:'fy0HDhPAWBj8BR9GFICI',
    username:'root',
    autoLoadEntities:true,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
