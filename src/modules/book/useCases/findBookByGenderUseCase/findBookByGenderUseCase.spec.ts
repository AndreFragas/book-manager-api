import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { FindBookByGenderUseCase } from "./findBookByGenderUseCase";

let findBookByGenderUseCase: FindBookByGenderUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('Find Book by gender', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        findBookByGenderUseCase = new FindBookByGenderUseCase(bookRepositoryInMemory)
    });

    
});