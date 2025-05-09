import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemDetailComponent } from './stock-item-detail.component';

describe('StockItemDetailComponent', () => {
  let component: StockItemDetailComponent;
  let fixture: ComponentFixture<StockItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockItemDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
