import { Test, TestingModule } from "@nestjs/testing";
import { BookController } from "./book.controller"
import { BookService } from "./book.service";
import { Book } from "@prisma/client";
import { CreateBookBody } from "./dtos/createBookBody";
import { UpdateBookBody } from "./dtos/updateBookBody";

const bookEntityList: Book[] = [
    { id: 1, title: 'Teste 1', author: 'Neymar', gender: 'craque', year_of_publication: 2023},
    { id: 2, title: 'Teste 2', author: 'Pele', gender: 'rei', year_of_publication: 2024},
    { id: 3, title: 'Teste 3', author: 'Kelvin', gender: 'monstro', year_of_publication: 2025}
];

const newBookEntity: Book = { id: 1, title: 'Teste 1', author: 'Teste 1', year_of_publication: 2025, gender: 'Teste 1'};

const updatedBookEntity: Book = { id: 1, title: 'Teste 1', author: 'Cristiano Ronaldo', year_of_publication: 2023, gender: 'craque'};

describe('BookController', () => {
    let bookController: BookController;
    let bookService: BookService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BookController],
            providers: [
                { 
                    provide: BookService,
                    useValue: { 
                        create: jest.fn().mockResolvedValue(newBookEntity),
                        list: jest.fn().mockResolvedValue(bookEntityList),
                        update: jest.fn().mockResolvedValue(updatedBookEntity),
                        delete: jest.fn().mockResolvedValue(undefined),
                        findById: jest.fn().mockResolvedValue(bookEntityList[0]),
                        findByAuthor: jest.fn().mockResolvedValue([bookEntityList[0]]),
                        findByGender: jest.fn().mockResolvedValue([bookEntityList[0]]),
                    }
                }, 
            ]
        }).compile();

        bookController = module.get<BookController>(BookController);
        bookService = module.get<BookService>(BookService);
    })

    it('Should be defined', () => {
        expect(bookController).toBeDefined();
    })

    describe('list', () => {
        it('Should return a book list entity successfully', async () => {
            const result = await bookController.list();

            expect(result).toEqual(bookEntityList);
            expect(bookService.list).toHaveBeenCalledTimes(1);
        })
    })

    describe('create', () => {
        it('should create a new book successfully', async () => {
            const body: CreateBookBody = {
                title: 'Teste 1',
                author: 'Teste 1',
                year_of_publication: 2025,
                gender: 'Teste 1'
            };

            const result = await bookController.create(body);

            expect(result).toEqual(newBookEntity);
            expect(bookService.create).toHaveBeenCalledTimes(1);
            expect(bookService.create).toHaveBeenCalledWith(body);
        })
    })

    describe('findById', () => {
        it ('Should get a book successfully', async () => {
            const result = await bookController.findById(1);

            expect(result).toEqual(bookEntityList[0]);
            expect(bookService.findById).toHaveBeenCalledTimes(1);
            expect(bookService.findById).toHaveBeenCalledWith(1);
        })
    })

    describe('update', () => {
        it ('Should update a book successfully', async () => { 
            const body: UpdateBookBody = {author: 'Cristiano Ronaldo'}

            const result = await bookController.update(1, body);

            expect(result).toEqual(updatedBookEntity);
            expect(bookService.update).toHaveBeenCalledTimes(1);
            expect(bookService.update).toHaveBeenCalledWith(1, body);
        })
    })

    describe('delete', () => {
        it ('Should delete a book successfully', async () => {
            const result = await bookController.delete(1);

            expect(result).toBeUndefined();
            expect(bookService.delete).toHaveBeenCalledTimes(1);
            expect(bookService.delete).toHaveBeenCalledWith(1);
        })
    })

    describe('findByAuthor', () => {
        it ('Should successfully get a book with equal author parameter', async () => {
            const result = await bookController.findByAuthor('neymar');

            expect(result).toEqual([bookEntityList[0]]);
            expect(bookService.findByAuthor).toHaveBeenCalledTimes(1);
            expect(bookService.findByAuthor).toHaveBeenCalledWith('neymar');
        })
    })

    describe('findByGender', () => {
        it ('Should successfully get a book with equal gender parameter.', async () => {
            const result = await bookController.findByGender('craque');

            expect(result).toEqual([bookEntityList[0]]);
            expect(bookService.findByGender).toHaveBeenCalledTimes(1);
            expect(bookService.findByGender).toHaveBeenCalledWith('craque');
        })
    })
})