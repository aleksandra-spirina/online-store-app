import { Observable, of } from "rxjs";
import { IPurchasesApiService } from "../interfaces/IPurchasesApiService";
import { Purchase } from "../interfaces/Purchase";

const data: Purchase[] = []


export class PurchasesApiMockService implements IPurchasesApiService {

	getAll(): Observable<Purchase[]> {
		return of(data);
	}

	add(purchase: Purchase): Observable<void> {
		data.push(purchase);
		return of(undefined);
	}

	delete(purchase: Purchase): Observable<void> {
		const index = data.indexOf(purchase, 0);
		if (index > -1) {
			data.splice(index, 1);
		}
		return of(undefined);
	}

	edit(id: number, purchase: Purchase): Observable<void> {
		for (let i = 0; i < data.length; ++i) {
			if (data[i].id === id) {
				data[i] = purchase;
				break;
			}
		}
		return of(undefined);
	}
}