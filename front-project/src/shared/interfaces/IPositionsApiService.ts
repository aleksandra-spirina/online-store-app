import { InjectionToken } from "@angular/core";
import { Position } from "./Position";
import { Observable } from "rxjs";

export const IPositionsApiServiceToken = new InjectionToken('IPositionsApiServiceToken')

export interface IPositionsApiService {
	getAll(): Observable<Position[]>;

	edit(id: number, position: Position): Observable<void>;
}