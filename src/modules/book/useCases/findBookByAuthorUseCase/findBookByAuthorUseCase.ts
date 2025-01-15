import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";

@Injectable()
export class FindBookByAuthorUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute(author: string) {
        const book = await this.bookRepository.findByAuthor(author);

        if (!book) throw Error('Book not found');

        return book;
    }
}