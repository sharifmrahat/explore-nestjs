import { Controller, Get } from '@nestjs/common';
import { booksService } from './books.service';

@Controller('book')
export class booksController {
  constructor(private readonly bookService: booksService) {}

  @Get('/getBook')
  getBook(): string {
    return this.bookService.getBook();
  }
}
