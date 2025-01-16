import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { BookModule } from './modules/book/book.module';


@Module({
  imports: [BookModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
