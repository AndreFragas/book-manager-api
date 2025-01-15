import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from "@nestjs/common";
import { CreateBookUseCase } from "src/modules/book/useCases/createBookUseCase/createBookUseCase";
import { CreateBookBody } from "./dtos/createBookBody";
import { BookViewModel } from "./viewModel/bookViewModel";
import { UpdateBookUseCase } from "src/modules/book/useCases/updateBookUseCase/updateBookUseCase";
import { DeleteBookUseCase } from "src/modules/book/useCases/deleteBookUseCase/deleteBookUseCase";
import { FindBookUseCase } from "src/modules/book/useCases/findBookUseCase/findBookUseCase";
import { ListBookUseCase } from "src/modules/book/useCases/listBookUseCase/listBookUseCase";
import { FindBookByAuthorUseCase } from "src/modules/book/useCases/findBookByAuthorUseCase/findBookByAuthorUseCase";
import { FindBookByGenderUseCase } from "src/modules/book/useCases/findBookByGenderUseCase/findBookByGenderUseCase";
import { UpdateBookBody } from "./dtos/updateBookBody";

@Controller('books')
export class BookController {
    constructor(
        private createBookUseCase: CreateBookUseCase,
        private updateBookUseCase: UpdateBookUseCase,
        private deleteBookUseCase: DeleteBookUseCase,
        private findBookUseCase: FindBookUseCase,
        private listBookUseCase: ListBookUseCase,
        private findBookByAuthorUseCase: FindBookByAuthorUseCase,
        private findBookByGenderUseCase: FindBookByGenderUseCase
    ){}

    @Post()
    async create(@Body() body: CreateBookBody) {
        const book = await this.createBookUseCase.execute(body);

        return BookViewModel.toHttp(book);
    }

    @Get()
    async list() {
        const books = await this.listBookUseCase.execute();

        return books.map((x) => BookViewModel.toHttp(x));
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        const book = await this.findBookUseCase.execute(id);

        return BookViewModel.toHttp(book);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: UpdateBookBody) {
        await this.updateBookUseCase.execute({ id, ...body})
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.deleteBookUseCase.execute(id);
    }

    @Get('/author/:author')
    async findByAuthor(@Param('author') author: string) {
        const books = await this.findBookByAuthorUseCase.execute(author);

        return books.map((x) => BookViewModel.toHttp(x));
    }

    @Get('/gender/:gender')
    async findByGender(@Param('gender') gender: string) {
        const books = await this.findBookByGenderUseCase.execute(gender);

        return books.map((x) => BookViewModel.toHttp(x));
    }
}