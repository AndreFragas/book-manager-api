import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";

@Injectable()
export class ListBookUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute() {
        const books = await this.bookRepository.list();

        return books || [];
    }
}