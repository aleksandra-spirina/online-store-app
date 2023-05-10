import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'price'
})
export class PricePipe implements PipeTransform {

	transform(value: number, currency: 'RUB' | 'EUR' = 'RUB'): string {
		switch (currency) {
			case 'RUB':
				return `${value} ₽`;
			case 'EUR':
				return `${value} $`;
			default:
				return value.toString();
		}
	}

}