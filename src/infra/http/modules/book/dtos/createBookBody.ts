import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateBookBody {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    year_of_publication: number;

    @IsString()
    @IsNotEmpty()
    gender: string;
}