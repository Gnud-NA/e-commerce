import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from '../services/product.service';

describe('AppController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeAll(async () => {
    const productServiceProvider = {
      provide: ProductService,
      useFactory: () => ({
        getTenTopProduct: jest.fn(() => {
          /**do something */
        }),
      }),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService, productServiceProvider],
    }).compile();

    productController = app.get<ProductController>(ProductController);

    productService = app.get<ProductService>(ProductService);
  });
  it('should be defined', () => {
    expect(productController).toBeDefined();
  });

  it('product service - should be defined', () => {
    expect(productService).toBeDefined();
  });
});
