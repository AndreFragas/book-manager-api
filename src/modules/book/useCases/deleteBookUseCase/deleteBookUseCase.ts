import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";

@Injectable()
export class DeleteBookUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute(id: number) {
        const book = await this.bookRepository.findById(id);

        if (!book) {
            throw Error('Book not found');
        }

        try {
            await this.bookRepository.delete(id);
        } catch (err) {
            throw Error('Error to the deleting book')
        }
    }
}