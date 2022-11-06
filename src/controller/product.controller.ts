import { Controller, Get, Query } from '@nestjs/common';

import { ProductService } from '../services/product.service';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getTopTenProduct(@Query() query) {
    return this.productService.getTopTenProduct(query);
  }
}
