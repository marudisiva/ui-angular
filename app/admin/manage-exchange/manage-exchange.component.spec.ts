import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExchangeComponent } from './manage-exchange.component';

describe('ManageExchangeComponent', () => {
  let component: ManageExchangeComponent;
  let fixture: ComponentFixture<ManageExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
