import { Inject, Injectable, Injector } from "@angular/core";
import { Purchase } from "../interfaces/Purchase";
import { IPurchasesApiService, IPurchasesApiServiceToken } from "../interfaces/IPurchasesApiService";
import { PositionsService } from "./positions.service";

@Injectable({ providedIn: 'root' })
export class PurchasesService {
	private _purchases: Purchase[] = [];
	private _summary = 0;

	constructor(@Inject(IPurchasesApiServiceToken) private purchasesApiService: IPurchasesApiService,
		private injector: Injector) { }

	get purchases(): Purchase[] {
		return this._purchases;
	}

	get summary(): number {
		return this._summary;
	}

	initialize(): void {
		this.purchasesApiService.getAll().subscribe(data => {
			this._purchases = data;
			this.updateSummary();
		});
	}

	addPurchase(purchase: Purchase): void {
		const body = this.search(purchase.id);
		if (body) {
			body.quantity += purchase.quantity;
			this.purchasesApiService.edit(purchase.id, body).subscribe(() => {
				this.initialize();
			});
		} else {
			this.purchasesApiService.add(purchase).subscribe(() => {
				this.initialize();
			});
		}
	}

	deletePurchase(purchase: Purchase): void {
		this.injector.get(PositionsService).returnToCatalog(purchase);
		this.purchasesApiService.delete(purchase).subscribe(() => {
			this.initialize();
		});
	}

	editPurchase(purchase: Purchase): void {
		const purchaseBody = this.search(purchase.id);
		const diff = purchaseBody!.quantity - purchase.quantity;
		const positionBody = JSON.parse(JSON.stringify(purchaseBody));

		positionBody.quantity = diff;
		purchaseBody!.quantity = purchase.quantity;

		this.injector.get(PositionsService).returnToCatalog(positionBody);
		this.purchasesApiService.edit(purchase.id, purchaseBody!).subscribe(() => {
			this.initialize();
		}); 
	}

	private search(id: number): Purchase | undefined {
		return this._purchases.find(elem => elem.id === id);
	}

	private updateSummary(): void {
		this._summary = this._purchases.reduce((sum, p) => p.price * p.quantity + sum, 0);
	}
}