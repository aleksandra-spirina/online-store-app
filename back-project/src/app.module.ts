import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasesModule } from './purchases/purchases.module';
import { PositionsModule } from './positions/positions.module';
import { PositionEntity } from './entity/position.entity';
import { PurchaseEntity } from './entity/purchase.entity';
const settings = require('../ormconfig.json');

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "password",
			database: "purchases",
			synchronize: true,
			logging: true,
			entities: [PositionEntity, PurchaseEntity],
		}),
		PurchasesModule,
		PositionsModule
	]
})
export class AppModule {
}