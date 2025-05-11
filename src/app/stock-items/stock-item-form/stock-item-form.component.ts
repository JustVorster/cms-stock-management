import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { StockItemService } from '../../services/stock-item.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { StockItem } from '../../models/stock-item';

@Component({
  selector: 'app-stock-item-form',
  standalone: true,
  templateUrl: './stock-item-form.component.html',
  styleUrls: ['./stock-item-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class StockItemFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private stockService = inject(StockItemService);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    id: [0],
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

  isEdit = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.stockService.getById(+id).subscribe(item => {
        this.form.patchValue(item);
      });
    }
  }

  onSubmit() {
  if (this.form.invalid) return;

  const payload = this.form.value as Partial<StockItem>;

  const action = this.isEdit
    ? this.stockService.update(payload)
    : this.stockService.create(payload);

  action.subscribe({
    next: () => this.router.navigate(['/stock-items']),
    error: err => console.error('Submit error:', err)
  });
}
}