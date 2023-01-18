import { IsDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCounselDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(11)
    @IsNotEmpty()
    readonly phone: string;


    @IsString
    ()
    @IsNotEmpty()
    readonly date: string;

    @IsString()
    @IsNotEmpty()
    readonly option: string;

    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    readonly text: string;

    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @IsOptional()
    @IsString()
    readonly payment: string;

    @IsOptional()
    @IsString()
    readonly RVstatus: string;
 
    @IsOptional()
    @IsString()
    readonly paymentStatus : string;
 
    @IsOptional()
    @IsString()
    readonly merchant_uid : string;
 
    @IsOptional()
    @IsString({ each: true })
    readonly paymentData : string[];
}