import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CounselController } from './counsel.controller';
import { CounselService } from './counsel.service';
import { CounselSchema } from './schema/counsel.schema';

@Module({
    imports: [ MongooseModule.forFeature([{ name: 'Counsel', schema: CounselSchema },]),],
    controllers: [CounselController],
    providers: [CounselService]
})


export class CounselModule {}
