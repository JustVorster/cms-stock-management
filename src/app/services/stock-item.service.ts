import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockItem } from '../models/stock-item';

@Injectable({ providedIn: 'root' })
export class StockItemService {
  private apiUrl = 'http://localhost:41232/api/stockitems';

  constructor(private http: HttpClient) {}

  getAll(): Observable<StockItem[]> {
    return this.http.get<StockItem[]>(this.apiUrl);
  }

  getById(id: number): Observable<StockItem> {
    return this.http.get<StockItem>(`${this.apiUrl}/${id}`);
  }

  create(item: Partial<StockItem>): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  update(item: Partial<StockItem>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}