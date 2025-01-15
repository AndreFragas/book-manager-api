import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { UpdateBookUseCase } from "./updateBookUseCase";

let updateBookUseCase: UpdateBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('Update Book', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        updateBookUseCase = new UpdateBookUseCase(bookRepositoryInMemory)
    });
});