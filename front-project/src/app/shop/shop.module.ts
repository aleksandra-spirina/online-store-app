import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopCatalogComponent } from './shop-catalog/shop-catalog.component';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricePipe } from 'src/pipes/price.pipe';
import { CartItemComponent } from './cart-item/cart-item.component';
import { IPurchasesApiServiceToken } from 'src/shared/interfaces/IPurchasesApiService';
import { PurchasesApiMockService } from 'src/shared/services/purchasesMockApi.service';
import { HttpClientModule } from '@angular/common/http';
import { IPositionsApiServiceToken } from 'src/shared/interfaces/IPositionsApiService';
import { PositionsMockApiService } from 'src/shared/services/positionsMockApi.service';


@NgModule({
	declarations: [
		ShopComponent,
		ShopCartComponent,
		ShopCatalogComponent,
		ShopItemComponent,
		PricePipe,
		CartItemComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	exports: [
		ShopComponent
	],
	providers: [
		{
			provide: IPurchasesApiServiceToken,
			useClass: PurchasesApiMockService
		},
		{
			provide: IPositionsApiServiceToken,
			useClass: PositionsMockApiService
		}
	]
})
export class ShopModule { }
