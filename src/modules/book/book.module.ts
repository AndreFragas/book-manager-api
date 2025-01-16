import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { DataBaseModule } from "src/infra/database/database.module";
import { BookService } from "./book.service";

@Module({
    controllers: [BookController],
    providers: [BookService],
    imports: [DataBaseModule]
})
export class BookModule {}