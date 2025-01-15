import { BookRepositoryInMemory } from "../../repositories/BookRepositoryInMemory";
import { CreateBookUseCase } from "./createBookUseCase";

let createBookUseCase: CreateBookUseCase;
let bookRepositoryInMemory: BookRepositoryInMemory

describe('Create Book', () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory()
        createBookUseCase = new CreateBookUseCase(bookRepositoryInMemory)
    });

    it('Should be able to create book', async () => {
        expect(bookRepositoryInMemory.books).toEqual([]);

        const book = await createBookUseCase.execute({
            title: 'Clean Code',
            author: 'Robert Cecil Martin',
            year_of_publication: 2008,
            gender: 'technical and software development'
        })

        expect(bookRepositoryInMemory.books).toEqual([book]);
    })
});