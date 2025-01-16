import { BookService } from "./book.service";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateBookBody } from "./dtos/createBookBody";
import { Book } from "@prisma/client";
import { BookRepository } from "./repositories/BookRepository";
import { UpdateBookBody } from "./dtos/updateBookBody";

const bookEntityList: Book[] = [
    { id: 1, title: 'Teste 1', author: 'Neymar', gender: 'craque', year_of_publication: 2023},
    { id: 2, title: 'Teste 2', author: 'Pele', gender: 'rei', year_of_publication: 2024},
    { id: 3, title: 'Teste 3', author: 'Kelvin', gender: 'monstro', year_of_publication: 2025}
];

const newBookEntity: Book = { id: 1, title: 'Teste 1', author: 'Teste 1', year_of_publication: 2025, gender: 'Teste 1'};

const updatedBookEntity: Book = { id: 1, title: 'Teste 1', author: 'Cristiano Ronaldo', year_of_publication: 2023, gender: 'craque'};

describe('BookService', () => {
    let bookService: BookService;
    let bookRepository: BookRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BookService,
                {
                    provide: BookRepository,
                    useValue: {
                        create: jest.fn().mockResolvedValue(newBookEntity),
                        update: jest.fn().mockResolvedValue(updatedBookEntity),
                        delete: jest.fn().mockResolvedValue(undefined),
                        list: jest.fn().mockResolvedValue(bookEntityList),
                        findById: jest.fn().mockResolvedValue(bookEntityList[0]),
                        findByGender: jest.fn().mockResolvedValue([bookEntityList[0]]),
                        findByAuthor: jest.fn().mockResolvedValue([bookEntityList[0]]),
                    }
                }
            ],
        }).compile();

        bookService = module.get<BookService>(BookService);
        bookRepository = module.get<BookRepository>(BookRepository);
    });

    it('Should be defined', () => {
        expect(bookService).toBeDefined();
        expect(bookRepository).toBeDefined();
    });

    describe('list', () => {
        it ('Should get a book list successfully', async () => {
            const result = await bookService.list();

            expect(result).toEqual(bookEntityList);
            expect(bookRepository.list).toHaveBeenCalledTimes(1);
        })
    })

    describe('create', () => {
        it ('Should create a new book successfully', async () => { 
            const body: CreateBookBody = {
                title: 'Teste 1',
                author: 'Teste 1',
                year_of_publication: 2025,
                gender: 'Teste 1'
            };

            const result = await bookService.create(body);

            expect(result).toEqual(newBookEntity);
            expect(bookRepository.create).toHaveBeenCalledTimes(1);
        });
    });

    describe('findById', () => {
        it ('Should get a book successfully', async () => {
            const result = await bookService.findById(1);
    
            expect(result).toEqual(bookEntityList[0]);
            expect(bookRepository.findById).toHaveBeenCalledTimes(1);
            expect(bookRepository.findById).toHaveBeenCalledWith(1);
        })
    })
    
    describe('update', () => {
        it ('Should update a book successfully', async () => { 
            const body: UpdateBookBody = {author: 'Cristiano Ronaldo'}
    
            const result = await bookService.update(1, body);
    
            expect(result).toEqual(updatedBookEntity);
            expect(bookRepository.update).toHaveBeenCalledTimes(1);
        })
    })
    
    describe('delete', () => {
        it ('Should delete a book successfully', async () => {
            const result = await bookService.delete(1);
    
            expect(result).toBeUndefined();
            expect(bookRepository.delete).toHaveBeenCalledTimes(1);
            expect(bookRepository.delete).toHaveBeenCalledWith(1);
        })
    })
    
    describe('findByAuthor', () => {
        it ('Should successfully get a book with equal author parameter', async () => {
            const result = await bookService.findByAuthor('neymar');
    
            expect(result).toEqual([bookEntityList[0]]);
            expect(bookRepository.findByAuthor).toHaveBeenCalledTimes(1);
            expect(bookRepository.findByAuthor).toHaveBeenCalledWith('neymar');
        })
    })
    
    describe('findByGender', () => {
        it ('Should successfully get a book with equal gender parameter.', async () => {
            const result = await bookService.findByGender('craque');
    
            expect(result).toEqual([bookEntityList[0]]);
            expect(bookRepository.findByGender).toHaveBeenCalledTimes(1);
            expect(bookRepository.findByGender).toHaveBeenCalledWith('craque');
        })
    })
})