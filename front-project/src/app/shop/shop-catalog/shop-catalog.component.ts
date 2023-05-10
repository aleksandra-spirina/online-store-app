import { Component } from '@angular/core';
import { Position } from 'src/shared/interfaces/Position';
import { PositionsService } from 'src/shared/services/positions.service';

@Component({
	selector: 'app-shop-catalog',
	templateUrl: './shop-catalog.component.html',
	styleUrls: ['./shop-catalog.component.less']
})
export class ShopCatalogComponent {
	constructor(public positionsService: PositionsService) {
		this.positionsService.initialize();
	}

	addToCart(position: Position) : void {
		this.positionsService.addToCart(position);
	}
}
