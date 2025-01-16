import { Injectable } from "@nestjs/common";
import { BookRepository } from "./repositories/BookRepository";
import { CreateBookBody } from "./dtos/createBookBody";
import { Book } from "./entities/Book";
import { UpdateBookBody } from "./dtos/updateBookBody";

@Injectable()
export class BookService { 
    constructor(private bookRepository: BookRepository) {}

    async create(props: CreateBookBody) {
        const book = new Book({
            title: props.title,
            author: props.author,
            year_of_publication: props.year_of_publication,
            gender: props.gender
        });
        
        const createdBook = await this.bookRepository.create(book);
        
        return createdBook;
    }

    async update(id: number, body: UpdateBookBody) {
        let book = await this.bookRepository.findById(id);

        if (!book) throw Error('Book not found')

        book.title = body.title;
        book.author = body.author;
        book.year_of_publication = body.year_of_publication;
        book.gender = body.gender;

        const updatedBook = await this.bookRepository.update(book);
        
        return updatedBook;
    }

    async delete(id: number) {
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

    async list(): Promise<Book[]> {
        const books = await this.bookRepository.list();

        return books || [];
    }

    async findById(id: number): Promise<Book | null> {
        const book = await this.bookRepository.findById(id);

        if (!book) throw Error('Book not found');

        return book;
    }

    async findByAuthor(author: string): Promise<Book[]> {
        const book = await this.bookRepository.findByAuthor(author);

        if (!book) throw Error('Book not found');

        return book;
    }

    async findByGender(gender: string): Promise<Book[]> {
        const book = await this.bookRepository.findByGender(gender);

        if (!book) throw Error('Book not found');

        return book;
    }
}