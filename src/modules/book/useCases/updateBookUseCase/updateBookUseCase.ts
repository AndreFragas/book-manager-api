import { Injectable } from "@nestjs/common";
import { BookRepository } from "../../repositories/BookRepository";
import { Book } from "../../entities/Book";

interface UpdateBookRequest {
    id: number;
    title?: string;
    author?: string;
    year_of_publication?: number
    gender?: string
}

@Injectable()
export class UpdateBookUseCase {
    constructor(private bookRepository: BookRepository) {}

    async execute(props: UpdateBookRequest) {
        let book = await this.bookRepository.findById(props.id);

        if (!book) throw Error('Book not found')

        book.title = props.title;
        book.author = props.author;
        book.year_of_publication = props.year_of_publication;
        book.gender = props.gender;

        const updatedBook = await this.bookRepository.update(book);
        
        return updatedBook;
    }
}