import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { BookRepository } from "src/modules/book/repositories/BookRepository";
import { PrismaBookRepository } from "./prisma/repositories/PrismaBookRepository";

@Module({ 
    providers: [
        PrismaService,
        { 
            provide: BookRepository, 
            useClass: PrismaBookRepository
        },
    ],
    exports: [BookRepository]
})
export class DataBaseModule {}