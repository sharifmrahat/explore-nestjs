import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { booksService } from './books.service';
import { createDto } from './dtos/create.dto';

@Controller('book')
export class booksController {
  constructor(private readonly bookService: booksService) {}

  @Get('/getBook')
  getBook(): string {
    return this.bookService.getBook();
  }

  @Post('/save')
  saveBook(@Body(new ValidationPipe()) body: createDto) {
    console.log(body, 'from controller');
    return this.bookService.saveBook(body);
  }
}
