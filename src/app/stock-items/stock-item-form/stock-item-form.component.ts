import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StockItemService } from '../../services/stock-item.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stock-item-form',
  standalone: true,
  templateUrl: './stock-item-form.component.html',
  styleUrls: ['./stock-item-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class StockItemFormComponent {
  form = this.fb.group({
    regNo: ['', Validators.required],
    make: ['', Validators.required],
    model: ['', Validators.required],
    modelYear: [0, Validators.required],
    kms: [0, Validators.required],
    colour: [''],
    vin: [''],
    retailPrice: [0],
    costPrice: [0]
  });

  constructor(
    private fb: FormBuilder,
    private stockService: StockItemService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.invalid) return;

    this.stockService.create(this.form.value).subscribe({
      next: () => this.router.navigate(['/stock-items']),
      error: err => console.error('Create error:', err)
    });
  }
}