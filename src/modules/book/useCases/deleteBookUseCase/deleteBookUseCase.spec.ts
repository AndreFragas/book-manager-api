import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { DeleteBookUseCase } from "./deleteBookUseCase";

let deleteBookUseCase: DeleteBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('Delete Book', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        deleteBookUseCase = new DeleteBookUseCase(bookRepositoryInMemory)
    });

   
});