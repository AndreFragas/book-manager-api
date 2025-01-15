import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";
import { Book } from "../../entities/Book";

interface CreateBookRequest {
    title: string;
    author: string;
    year_of_publication: number
    gender: string
}

@Injectable()
export class CreateBookUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute(props: CreateBookRequest) {
        const book = new Book({
            title: props.title,
            author: props.author,
            year_of_publication: props.year_of_publication,
            gender: props.gender
        });

        const createdBook = await this.bookRepository.create(book);

        return createdBook;
    }
}