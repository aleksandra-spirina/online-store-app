import { Observable } from "rxjs";
import { Purchase } from "./Purchase";
import { InjectionToken } from "@angular/core";

export const IPurchasesApiServiceToken = new InjectionToken('IPurchasesApiServiceToken');

export interface IPurchasesApiService {
	getAll(): Observable<Purchase[]>;

	add(purchase: Purchase): Observable<void>;

	delete(purchase: Purchase): Observable<void>;

	edit(id: number, purchase: Purchase): Observable<void>;
}