import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CounselModule } from './counsel/counsel.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kimkuns:rlawldi98@cluster0.lpbor.mongodb.net/?retryWrites=true&w=majority', {dbName: 'NestJS'}), 
   
    CounselModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
