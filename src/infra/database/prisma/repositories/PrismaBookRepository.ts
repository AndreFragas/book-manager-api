import { Book } from "src/modules/book/entities/Book";
import { BookRepository } from "src/modules/book/repositories/BookRepository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaBookMapper } from "../mappers/PrismaBookMapper";

@Injectable()
export class PrismaBookRepository implements BookRepository {
    constructor (private prisma: PrismaService){}

    async create(book: Book) {
        const createdBook = await this.prisma.book.create({ 
            data: { 
                title: book.title,
                author: book.author,
                year_of_publication: book.year_of_publication,
                gender: book.gender
            }
        })

        return createdBook;
    }

    async findById(id: number): Promise<Book | null> {
        const book = await this.prisma.book.findUnique( { where: { id: parseInt(id.toString())}});

        if (!book) return null;

        return PrismaBookMapper.toDomain(book);
    }

    async delete(id: number) {
        await this.prisma.book.delete({ where: { id: parseInt(id.toString()) }})
    }

    
    async update(book: Book) {
        const bookRaw = PrismaBookMapper.toPrisma(book);
        
        const updatedBook = await this.prisma.book.update({
            data: bookRaw,
            where: { 
                id: book.id
            }
        })

        return updatedBook
    }

    async list(): Promise<Book[]> {
        const books = await this.prisma.book.findMany();

        return books.map((x) => PrismaBookMapper.toDomain(x));
    }

    async findByGender(gender: string): Promise<Book[]> {
        const books = await this.prisma.book.findMany({ 
            where: { 
                gender: {
                    contains: gender,
                    mode: 'insensitive'
                }
            }
        });

        return books.map((x) => PrismaBookMapper.toDomain(x));
    }

    async findByAuthor(author: string): Promise<Book[]> {
        const books = await this.prisma.book.findMany({ 
            where: { 
                author: {
                    contains: author,
                    mode: 'insensitive'
                }
            }
        });

        return books.map((x) => PrismaBookMapper.toDomain(x));
    }
}