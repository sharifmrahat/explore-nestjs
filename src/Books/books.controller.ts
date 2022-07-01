import { Body, Controller, Get, Post } from '@nestjs/common';
import { booksService } from './books.service';

@Controller('book')
export class booksController {
  constructor(private readonly bookService: booksService) {}

  @Get('/getBook')
  getBook(): string {
    return this.bookService.getBook();
  }

  @Post('/save')
  saveBook(@Body() body: string) {
    console.log(body);
    return this.bookService.saveBook(body);
  }
}
