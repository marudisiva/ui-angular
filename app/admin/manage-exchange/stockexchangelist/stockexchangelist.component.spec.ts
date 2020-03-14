import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockexchangelistComponent } from './stockexchangelist.component';

describe('StockexchangelistComponent', () => {
  let component: StockexchangelistComponent;
  let fixture: ComponentFixture<StockexchangelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockexchangelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockexchangelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
