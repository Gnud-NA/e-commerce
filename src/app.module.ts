import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
import { ProductController } from './controller/product.controller';
import { ProductService } from './services/product.service';
import { DatabaseOrmModule } from './database/database.module';
import { Category, Discount, Product } from './entities';

@Module({
  imports: [
    DatabaseOrmModule(),
    TypeOrmModule.forFeature([Category, Discount, Product]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
