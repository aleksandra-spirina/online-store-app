import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryInfo, CountryInfoService } from 'src/shared/services/countryInfo.service';

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

@Component({
	selector: 'app-buyer-form',
	templateUrl: './buyer-form.component.html',
	styleUrls: ['./buyer-form.component.less']
})
export class BuyerFormComponent {

	constructor(public countryInfoService: CountryInfoService) { }

	readonly items$: Observable<CountryInfo[]> = this.countryInfoService.countries;

	country = '';

	form = new FormGroup({
		country: new FormControl<string>('', [Validators.required]),
		address: new FormControl<string>('', [Validators.required]),
		name: new FormControl<string>('', [Validators.required]),
		email: new FormControl<string>('', [Validators.required, Validators.pattern(emailPattern)])
	});

	onSelected(e: any): void {
		console.log(e);
	}

}
