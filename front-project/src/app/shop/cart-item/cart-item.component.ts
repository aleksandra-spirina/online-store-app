import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Purchase } from 'src/shared/interfaces/Purchase';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent {
	private _purchase: Purchase = {} as Purchase;
	@Input()
	set purchase(p: Purchase) {
		this._purchase = p;
		this.form.setValue({
			quantity: this._purchase.quantity
		})
	}
	get purchase(): Purchase {
		return this._purchase;
	}

	@Output() delete = new EventEmitter<Purchase>();

	form = new FormGroup({
		quantity: new FormControl<number>(1)
	});

	readonly changeQuantity$ = new Subject<number>();


	onDelete(): void {
		this.delete.emit(this.purchase);
	}

	onChange(e: Event) {
		const value: number = parseInt((e.target as HTMLTextAreaElement).value);
		if(value) {
			this.changeQuantity$.next(value);
		}
  }
}
