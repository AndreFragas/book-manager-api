import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { FindBookUseCase } from "./findBookUseCase";

let findBookUseCase: FindBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('Find Book by id', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        findBookUseCase = new FindBookUseCase(bookRepositoryInMemory)
    });

    
});