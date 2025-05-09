import { Component, OnInit } from '@angular/core';
import { StockItemService } from '../../services/stock-item.service';
import { StockItem } from '../../models/stock-item';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-stock-item-list',
  standalone: true,
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss'],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule]
})
export class StockItemListComponent implements OnInit {
  items: StockItem[] = [];
  loading = true;

  constructor(private stockService: StockItemService) {}

  ngOnInit(): void {
    this.stockService.getAll().subscribe({
      next: data => {
        this.items = data;
        this.loading = false;
      },
      error: err => {
        console.error('Failed to load stock items:', err);
        this.loading = false;
      }
    });
  }
}