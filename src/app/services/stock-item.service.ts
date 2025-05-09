import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockItem } from '../models/stock-item';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StockItemService {
  private apiUrl = 'http://localhost:41232/api/stockitems';

  constructor(private http: HttpClient) {}

  getAll(): Observable<StockItem[]> {
    return this.http.get<StockItem[]>(this.apiUrl);
  }
}