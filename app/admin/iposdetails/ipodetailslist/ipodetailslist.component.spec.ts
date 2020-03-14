import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpodetailslistComponent } from './ipodetailslist.component';

describe('IpodetailslistComponent', () => {
  let component: IpodetailslistComponent;
  let fixture: ComponentFixture<IpodetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpodetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpodetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
