import { Component } from '@angular/core';
import { Purchase } from 'src/shared/interfaces/Purchase';
import { PurchasesService } from 'src/shared/services/purchases.service';

@Component({
	selector: 'app-shop-cart',
	templateUrl: './shop-cart.component.html',
	styleUrls: ['./shop-cart.component.less']
})
export class ShopCartComponent {

	constructor(public purchasesService: PurchasesService) {
		this.purchasesService.initialize();
	}

	deleteFromCart(purchase: Purchase): void {
		this.purchasesService.deletePurchase(purchase);
	}

	editCartItem(purchase: Purchase): void {
		this.purchasesService.editPurchase(purchase);
	}
}
