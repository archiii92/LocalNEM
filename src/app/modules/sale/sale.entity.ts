import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Sale {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column({
    type: 'varchar',
    length: 40
  })
  sellerId: string;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2
  })
  amountToSell: number;

  // @ManyToOne(type => Currency)
  // currency: Currency;

  // @Column({
  //   type: 'numeric',
  //   precision: 8,
  //   scale: 2
  // })
  // minAmount: number;

  @Column({
    type: 'numeric',
    precision: 8,
    scale: 2
  })
  unitPrice: number;

  // @Column({
  //   type: 'varchar',
  //   length: 100
  // })
  // additionalInfo: string;
}