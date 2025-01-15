import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { FindBookByAuthorUseCase } from "./findBookByAuthorUseCase";

let findBookByAuthorUseCase: FindBookByAuthorUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('Find Book by author', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        findBookByAuthorUseCase = new FindBookByAuthorUseCase(bookRepositoryInMemory)
    });

    
});