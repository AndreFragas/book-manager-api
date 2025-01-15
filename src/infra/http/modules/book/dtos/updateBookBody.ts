import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateBookBody {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    title?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    author?: string;

    @IsNumber()
    @IsOptional()
    year_of_publication?: number;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    gender?: string;
}