import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Position } from 'src/shared/interfaces/Position';

@Component({
	selector: 'app-shop-item',
	templateUrl: './shop-item.component.html',
	styleUrls: ['./shop-item.component.less']
})
export class ShopItemComponent {
	@Input() position!: Position;
	@Output() add = new EventEmitter<Position>();

	form = new FormGroup({
		quantity: new FormControl<number>(1, [Validators.required, Validators.min(1)])
	});

	toCart(): void {
		const purchase = JSON.parse(JSON.stringify(this.position));
		purchase.quantity = this.form.get('quantity')?.value!;
		this.add.emit(purchase);
	}
}
