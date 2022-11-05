import { TypeOrmModule } from '@nestjs/typeorm';

import { Category, Product, Discount } from 'src/entities';
export function DatabaseOrmModule() {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'e-commerce',
    entities: [Category, Product, Discount],
    synchronize: true,
  });
}
