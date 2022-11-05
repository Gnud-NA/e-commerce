import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Product } from './product.entity';
@Entity()
export class Discount extends BaseEntity {
  @Column()
  name: string;

  @Column()
  discountPercent: number;

  @Column({
    type: 'enum',
    enum: [true, false],
    default: false,
  })
  active: boolean;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
