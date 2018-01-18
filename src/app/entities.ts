// import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

// abstract class BaseEntity {

//   @PrimaryGeneratedColumn('uuid')
//   id: string;
// }

// abstract class BaseEntityWithDate extends BaseEntity {

//   @Column({ type: 'timestamp' })
//   date: Date;
// }

// @Entity()
// export class Currency extends BaseEntity {

//   @Column({
//     type: 'varchar',
//     length: 3
//   })
//   code: string;
// }

// @Entity()
// export class Status extends BaseEntity {

//   @Column({
//     type: 'varchar',
//     length: 20
//   })
//   name: string;
// }

// @Entity()
// export class Sale extends BaseEntityWithDate {

//   @Column({
//     type: 'varchar',
//     length: 40
//    })
//   sellerId: string;

//   @Column({
//     type: 'numeric',
//     precision: 8,
//     scale: 2
//    })
//   amountToSell: number;

//   @ManyToOne(type => Currency)
//   currency: Currency;

//   @Column({
//     type: 'numeric',
//     precision: 8,
//     scale: 2
//    })
//   minAmount: number;

//   @Column({
//     type: 'numeric',
//     precision: 8,
//     scale: 2
//   })
//   unitPrice: number;

//   @Column({
//     type: 'varchar',
//     length: 100
//    })
//   additionalInfo: string;
// }

// @Entity()
// export class Deal extends BaseEntityWithDate {

//   @Column({
//     type: 'varchar',
//     length: 40
//    })
//   sellerId: string;

//   @Column({
//     type: 'numeric',
//     precision: 8,
//     scale: 2
//    })
//   amountToBuy: number;

//   @ManyToOne(type => Status)
//   status: Status;

//   @ManyToOne(type => Sale)
//   sale: Sale;
// }