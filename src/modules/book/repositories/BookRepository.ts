import { Book } from "../entities/Book";

export abstract class BookRepository {
    abstract create(book: Book);
    abstract findById(id: number): Promise<Book | null>;
    abstract delete(id: number);
    abstract list(): Promise<Book[]>;
    abstract update(book: Book);
    abstract findByGender(gender: string): Promise<Book[]>;
    abstract findByAuthor(author: string): Promise<Book[]>;
}