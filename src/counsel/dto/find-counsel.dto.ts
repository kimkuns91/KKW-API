import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class FindCounselDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @MaxLength(11)
    @IsNotEmpty()
    readonly phone: string;
}