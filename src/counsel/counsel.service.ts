import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateCounselDto } from './dto/create-counsel.dto';
import { FindCounselDto } from './dto/find-counsel.dto';
import { UpdateCounselDto } from './dto/update-counsel.dto';
import { Counsel, CounselDocument } from './schema/counsel.schema';

@Injectable()
export class CounselService {
    constructor(@InjectModel(Counsel.name) private model: Model<CounselDocument>){}
    
    async findAll(): Promise<Counsel[]> {
        return await this.model.find().exec();
    }
    
    async findByInfo(findCounselDto: FindCounselDto): Promise<Counsel> {
      const counsel:Counsel = await this.model.findOne({name : findCounselDto.name, phone : findCounselDto.phone}).sort({ createdAt: -1 }).exec();
      if (!counsel){
        throw new NotFoundException('예약하신 내역이 없습니다.')
      }
      return counsel;
    }
    
    async create(createCounselDto: CreateCounselDto): Promise<Counsel> {
      return await new this.model({
        ...createCounselDto,
        RVstatus: "상담 신청 완료",
        createdAt: new Date(),
      }).save();
    }
    
    async update(_id: string, updateCounselDto: UpdateCounselDto): Promise<Counsel> {
      return await this.model.findByIdAndUpdate(_id, updateCounselDto).exec();
    }
  
    async delete(_id: string): Promise<Counsel> {
      return await this.model.findByIdAndDelete(_id).exec();
    }
}
