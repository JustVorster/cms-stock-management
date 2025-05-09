import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  imports: [CommonModule, MatDialogModule]
})
export class ImageGalleryComponent {
  currentIndex = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { images: string[] },
    public dialogRef: MatDialogRef<ImageGalleryComponent>
  ) {}

  next() {
    if (this.currentIndex < this.data.images.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  close() {
    this.dialogRef.close();
  }
}