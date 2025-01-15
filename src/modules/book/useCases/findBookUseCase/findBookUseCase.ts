import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";

@Injectable()
export class FindBookUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute(id: number) {
        const book = await this.bookRepository.findById(id);

        if (!book) throw Error('Book not found');

        return book;
    }
}