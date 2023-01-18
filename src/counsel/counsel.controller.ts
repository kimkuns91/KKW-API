import { Controller, HttpStatus, Get, Post, Put, Delete, Body, Res, Param } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { CounselService } from './counsel.service';
import { CreateCounselDto } from './dto/create-counsel.dto';
import { FindCounselDto } from './dto/find-counsel.dto';
import { UpdateCounselDto } from './dto/update-counsel.dto';

@Controller('counsel')
export class CounselController {
    constructor(private readonly service: CounselService) {}
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Post('/find')
    async findByInfo(@Body() findCounselDto: FindCounselDto) {
      return await this.service.findByInfo(findCounselDto);
    }
  
    @Post()
    async create(@Body() createTodoDto: CreateCounselDto) {
      return await this.service.create(createTodoDto);
    }
  

    @Patch('/update')
    async patch(@Body() _id: string, @Body() updateTodoDto: UpdateCounselDto) {
      return await this.service.update(_id, updateTodoDto);
    }
  
    @Delete('/delete')
    async delete(@Body() _id: string) {
      return await this.service.delete(_id);
    }
}
