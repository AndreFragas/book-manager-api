import { Book } from "src/modules/book/entities/Book";
import { Book as BookRaw } from '@prisma/client';

export class PrismaBookMapper {
    static toPrisma({
        id,
        title,
        author,
        year_of_publication,
        gender
    }: Book): BookRaw {
        return { id, title, author, year_of_publication, gender }
    }

    static toDomain({ 
        id,
        title,
        author,
        year_of_publication,
        gender
    }: BookRaw): Book { 
        return new Book({ id, title, author, year_of_publication, gender })
    }
}