import { Injectable } from "@angular/core";
import { IPurchasesApiService } from "../interfaces/IPurchasesApiService";
import { Observable } from "rxjs";
import { Purchase } from "../interfaces/Purchase";
import { HttpClient } from '@angular/common/http';

const host = 'http://localhost:3000/purchases';

@Injectable({ providedIn: 'root' })
export class PurchasesApiService implements IPurchasesApiService {
	constructor(private httpClient: HttpClient) { }
	edit(id: number, purchase: Purchase): Observable<void> {
		throw new Error("Method not implemented.");
	}

	getAll(): Observable<Purchase[]> {
		return this.httpClient.get<Purchase[]>(host);
	}

	add(purchase: Purchase): Observable<void> {
		return this.httpClient.post<void>(host, purchase);
	}
	
	delete(purchase: Purchase): Observable<void> {
		return this.httpClient.delete<void>(`${host}/${purchase.id}`);
	}

}