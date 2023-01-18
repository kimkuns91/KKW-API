import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document, SchemaTypes, Types } from "mongoose";

export type CounselDocument = Counsel & Document;

@Schema({ timestamps: true })
export class Counsel {
   _id: mongoose.Types.ObjectId;
   @Prop()
   name: string;
   @Prop()
   phone: string;
   @Prop()
   date: string;
   @Prop()
   option: string;
   @Prop()
   text: string;
   @Prop()
   amount: number;
   @Prop()
   payment: string;
   @Prop()
   RVstatus: string;
   @Prop()
   paymentStatus : string;
   @Prop()
   merchant_uid : string;
   @Prop()
   paymentData : string[];
}
export const CounselSchema = SchemaFactory.createForClass(Counsel);