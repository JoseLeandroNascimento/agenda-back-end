import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [EventoModule,TypeOrmModule.forRoot({
    port:Number(process.env.MYSQLPORT),
    type:'mysql',
    database:'agenda',
    host: process.env.MYSQLHOST,
    password: process.env.MYSQLPASSWORD,
    username:process.env.MYSQLUSER,
    autoLoadEntities:true,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
