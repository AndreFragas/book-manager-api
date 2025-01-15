import { Module } from '@nestjs/common';
import { BookModule } from './infra/http/modules/book/book.module';
import { DataBaseModule } from './infra/database/database.module';


@Module({
  imports: [BookModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
