import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";

@Injectable()
export class FindBookByGenderUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute(gender: string) {
        const book = await this.bookRepository.findByGender(gender);

        if (!book) throw Error('Book not found');

        return book;
    }
}