import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockpricelistComponent } from './stockpricelist.component';

describe('StockpricelistComponent', () => {
  let component: StockpricelistComponent;
  let fixture: ComponentFixture<StockpricelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpricelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpricelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
