import { Component } from '@angular/core';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.less']
})
export class ShopComponent {
	catalog: boolean = true;

	onCatalog(): void {
		this.catalog = true;
	}

	onCart(): void {
		this.catalog = false;
	}
}
