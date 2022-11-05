import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ nullable: true })
  createAt: Date;

  @UpdateDateColumn({ nullable: true })
  updateAt: Date;

  @DeleteDateColumn({ nullable: true })
  deleteAt: Date;
}
