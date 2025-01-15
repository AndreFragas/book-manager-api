import { Book } from "src/modules/book/entities/Book";

export class BookViewModel {
    static toHttp({ id, title, author, year_of_publication, gender}: Book) {
        return {
            id,
            title,
            author,
            year_of_publication,
            gender
        }
    }
}