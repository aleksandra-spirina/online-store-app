import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Purchase } from 'src/shared/interfaces/Purchase';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent {
	@Input() purchase: Purchase = {} as Purchase;
	@Output() delete = new EventEmitter<Purchase>();
	@Output() edit = new EventEmitter<Purchase>();

	form = new FormGroup({
		quantity: new FormControl<number>(1, [Validators.required, Validators.min(1)])
	});

	readonly changeQuantity$ = new Subject<number>();

	constructor() {
		this.changeQuantity$.subscribe(r => console.log(r));
	}

	onDelete(): void {
		this.delete.emit(this.purchase);
	}

	onChange(e: Event) {
		const value: number = parseInt((e.target as HTMLTextAreaElement).value);
		if (value) {
			this.changeQuantity$.next(value);
		}
	}

	onEdit() {
		const newPurchase = JSON.parse(JSON.stringify(this.purchase));
		newPurchase.quantity = this.form.get('quantity')?.value!;
		this.edit.emit(newPurchase);
	}
}
