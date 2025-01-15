import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { CreateBookUseCase } from "src/modules/book/useCases/createBookUseCase/createBookUseCase";
import { DataBaseModule } from "src/infra/database/database.module";
import { UpdateBookUseCase } from "src/modules/book/useCases/updateBookUseCase/updateBookUseCase";
import { DeleteBookUseCase } from "src/modules/book/useCases/deleteBookUseCase/deleteBookUseCase";
import { ListBookUseCase } from "src/modules/book/useCases/listBookUseCase/listBookUseCase";
import { FindBookUseCase } from "src/modules/book/useCases/findBookUseCase/findBookUseCase";
import { FindBookByAuthorUseCase } from "src/modules/book/useCases/findBookByAuthorUseCase/findBookByAuthorUseCase";
import { FindBookByGenderUseCase } from "src/modules/book/useCases/findBookByGenderUseCase/findBookByGenderUseCase";

@Module({
    controllers: [BookController],
    providers: [CreateBookUseCase, UpdateBookUseCase, DeleteBookUseCase, ListBookUseCase, FindBookUseCase, FindBookByAuthorUseCase, FindBookByGenderUseCase],
    imports: [DataBaseModule]

})
export class BookModule {}