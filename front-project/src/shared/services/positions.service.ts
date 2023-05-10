import { Inject, Injectable, Injector } from "@angular/core";
import { Position } from "../interfaces/Position";
import { IPositionsApiService, IPositionsApiServiceToken } from "../interfaces/IPositionsApiService";
import { PurchasesService } from "./purchases.service";

@Injectable({ providedIn: 'root' })
export class PositionsService {
	private _positions: Position[] = [];

	constructor(@Inject(IPositionsApiServiceToken) private positionsApiService: IPositionsApiService, 
	private injector: Injector) { }

	get positions(): Position[] {
		return this._positions;
	}

	initialize(): void {
		this.positionsApiService.getAll().subscribe(data => {
			this._positions = data;
		});
	}

	addToCart(position: Position): void {
		const body = this.search(position.id);
		body!.quantity -= position.quantity;
		this.injector.get(PurchasesService).addPurchase(position);
		this.positionsApiService.edit(position.id, body!).subscribe(() => {
			this.initialize();
		});
	}

	returnToCatalog(position: Position): void {
		const body = this.search(position.id);
		body!.quantity += position.quantity;
		this.positionsApiService.edit(position.id, body!).subscribe(() => {
			this.initialize();
		});
	}

	private search(id: number) : Position | undefined {
		return this._positions.find(elem => elem.id === id);
	}
}