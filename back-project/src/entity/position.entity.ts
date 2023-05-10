import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("position_entity")
export class PositionEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	price: number;

	@Column()
	quantity: number;
}
