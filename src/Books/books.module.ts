import { Module } from '@nestjs/common';
import { booksController } from './books.controller';
import { booksService } from './books.service';

@Module({
  imports: [],
  providers: [booksService],
  controllers: [booksController],
})
export class booksModule {}
