import { Component, OnInit } from '@angular/core';
import { StockItemService } from '../../services/stock-item.service';
import { StockItem } from '../../models/stock-item';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';

@Component({
  selector: 'app-stock-item-list',
  standalone: true,
  templateUrl: './stock-item-list.component.html',
  styleUrls: ['./stock-item-list.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ImageGalleryComponent
  ]
})
export class StockItemListComponent implements OnInit {
  items: StockItem[] = [];
  loading = true;

  constructor(
    private stockService: StockItemService,
    private dialog: MatDialog
  ) {}

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

  deleteItem(id: number) {
  if (confirm('Are you sure you want to delete this item?')) {
    this.stockService.delete(id).subscribe({
      next: () => this.items = this.items.filter(i => i.id !== id),
      error: err => console.error('Delete failed', err)
    });
  }
}

  openGallery(images: { data: string }[]) {
    const imageDataUrls = images.map(i => `data:image/png;base64,${i.data}`);
    this.dialog.open(ImageGalleryComponent, {
      data: { images: imageDataUrls },
      width: '95vw',
      height: '85vh',
      panelClass: 'custom-gallery-dialog'
    });
  }
}