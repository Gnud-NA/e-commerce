import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Category } from './category.entity';
import { Discount } from './discount.entity';
@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;

  @ManyToOne(() => Discount, (discount) => discount.product)
  discount: Discount;
}
