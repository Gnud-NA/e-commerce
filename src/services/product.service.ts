import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Category, Product } from 'src/entities';
import { BadRequestException } from '@nestjs/common/exceptions';
import { ResponseHandler } from 'src/common/response';
import { ErrorException } from 'src/constants/error';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async getTopTenProduct(query) {
    try {
      const { startDate, endDate, category } = query;
      let results;
      const categoryId = await this.categoryRepository.findOne({
        where: { name: category },
        select: { id: true },
      });
      const productQueryBuilder = this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.category', 'category')
        .leftJoinAndSelect('product.discount', 'discount')
        .orderBy('product.discount', 'DESC')
        .limit(10);
      if (!categoryId && (!startDate || !endDate)) {
        throw new BadRequestException(ErrorException.CATEGORY_NOT_EXIST);
      } else if (startDate && endDate && !category) {
        results = await productQueryBuilder
          .where('discount.startDate >= :startDate', { startDate })
          .andWhere('discount.endDate <= :endDate', { endDate })
          .getMany();
      } else if (category && (!startDate || !endDate)) {
        results = await productQueryBuilder
          .where('product.category = :category', { category: categoryId.id })
          .getMany();
      } else if (category && startDate && endDate) {
        results = await productQueryBuilder
          .where('product.category = :category', { category: categoryId.id })
          .andWhere('discount.startDate >= :startDate', { startDate })
          .andWhere('discount.endDate <= :endDate', { endDate })
          .getMany();
      } else {
        results = await productQueryBuilder.getMany();
      }
      return new ResponseHandler(true, results, 200);
    } catch (error) {
      return new ResponseHandler(false, error, error.statusCode);
    }
  }
}
