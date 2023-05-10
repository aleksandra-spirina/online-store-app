import { Observable, of } from "rxjs";
import { IPositionsApiService } from "../interfaces/IPositionsApiService";
import { Position } from "../interfaces/Position";
import { Purchase } from "../interfaces/Purchase";

const data: Position[] = [
	{
		id: 1,
		title: 'apple',
		price: 10,
		quantity: 25
	},
	{
		id: 2,
		title: 'beer',
		price: 20,
		quantity: 10
	},
	{
		id: 3,
		title: 'carrot',
		price: 30,
		quantity: 50
	},
	{
		id: 4,
		title: 'flowers',
		price: 100,
		quantity: 3
	}
]

export class PositionsMockApiService implements IPositionsApiService {

	getAll(): Observable<Position[]> {
		return of(data);
	}

	edit(id: number, position: Position): Observable<void> {
		for (let i = 0; i < data.length; ++i) {
			if (data[i].id === id) {
				data[i] = position;
				break;
			}
		}
		return of();
	}
}