import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { booksController } from './books.controller';
import { booksService } from './books.service';
import { LoggerMiddleware } from 'src/logger.middleware';

@Module({
  imports: [],
  providers: [booksService],
  controllers: [booksController],
})
export class booksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('book');
  }
}
