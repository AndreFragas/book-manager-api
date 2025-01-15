import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { ListBookUseCase } from "./listBookUseCase";

let listBookUseCase: ListBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('List Book', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        listBookUseCase = new ListBookUseCase(bookRepositoryInMemory)
    });

    
});