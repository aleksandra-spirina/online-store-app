import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("purchase_entity")
export class PurchaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	price: number;

	@Column()
	quantity: number;
}
