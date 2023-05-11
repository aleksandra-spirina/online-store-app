import { Injectable } from "@angular/core";
import { Observable, from, map } from "rxjs";

const host = 'https://restcountries.com/v3.1/all';

export class CountryInfo {
	constructor(
		readonly name: string,
		readonly currency: string
	) { }

	toString(): string {
		return this.name;
	}
}


@Injectable({ providedIn: 'root' })
export class CountryInfoService {
	private _currentCountry: CountryInfo = {} as CountryInfo;
	private _countries$: Observable<CountryInfo[]> = this.getData(host);
	
	get currentCountry(): CountryInfo {
		return this._currentCountry;
	}

	get countries():  Observable<CountryInfo[]> {
		return this._countries$;
	}

	private getData(url: string): Observable<CountryInfo[]> {
		const data$: Observable<any[]> = from(fetch('https://restcountries.com/v3.1/all').then(res => res.json()));
		return data$.pipe(map(e => e.map(elem => new CountryInfo(elem.name.common, elem.currencies ? Object.entries(elem.currencies)[0][0] : ''))));
	}
}