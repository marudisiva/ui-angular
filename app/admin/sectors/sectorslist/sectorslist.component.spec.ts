import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorslistComponent } from './sectorslist.component';

describe('SectorslistComponent', () => {
  let component: SectorslistComponent;
  let fixture: ComponentFixture<SectorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
