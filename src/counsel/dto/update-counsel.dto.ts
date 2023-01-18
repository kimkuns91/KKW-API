import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { CreateCounselDto } from './create-counsel.dto';

export class UpdateCounselDto extends PartialType(CreateCounselDto) {
    @IsString()
    readonly _id? : string;
}