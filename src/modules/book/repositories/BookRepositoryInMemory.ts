import { Book } from "../entities/Book";
import { BookRepository } from "./BookRepository";

export class BookRepositoryInMemory implements BookRepository {
    public books: Book[] = [];

    async create(book: Book) {
        this.books.push(book);
    }

    async findById(id: number): Promise<Book | null> {
        throw new Error('Method not implemented');
    }

    async delete(id: number) {
        throw new Error('Method not implemented');
    }

    async list(): Promise<Book[]>{
        throw new Error('Method not implemented');
    }

    async update(book: Book) {
        throw new Error('Method not implemented');
    }

    async findByGender(gender: string): Promise<Book[]> {
        throw new Error('Method not implemented');
    }

    async findByAuthor(author: string): Promise<Book[]> {
        throw new Error('Method not implemented');
    }
}