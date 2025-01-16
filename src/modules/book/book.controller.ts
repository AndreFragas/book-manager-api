import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateBookBody } from "./dtos/createBookBody";
import { BookViewModel } from "./viewModel/bookViewModel";
import { UpdateBookBody } from "./dtos/updateBookBody";
import { BookService } from "./book.service";

@Controller('books')
export class BookController {
    constructor(
        private bookService: BookService,
    ){}

    @Post()
    async create(@Body() body: CreateBookBody) {
        const book = await this.bookService.create(body);

        return BookViewModel.toHttp(book);
    }

    @Get()
    async list() {
        const books = await this.bookService.list();

        return books.map((x) => BookViewModel.toHttp(x));
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        const book = await this.bookService.findById(id);

        return BookViewModel.toHttp(book);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: UpdateBookBody) {
        const updatedBook = await this.bookService.update(id, body);

        return BookViewModel.toHttp(updatedBook);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.bookService.delete(id);
    }

    @Get('/author/:author')
    async findByAuthor(@Param('author') author: string) {
        const books = await this.bookService.findByAuthor(author);

        return books.map((x) => BookViewModel.toHttp(x));
    }

    @Get('/gender/:gender')
    async findByGender(@Param('gender') gender: string) {
        const books = await this.bookService.findByGender(gender);

        return books.map((x) => BookViewModel.toHttp(x));
    }
}