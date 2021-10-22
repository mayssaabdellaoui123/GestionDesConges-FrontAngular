import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployeedepComponent } from './listemployeedep.component';

describe('ListemployeedepComponent', () => {
  let component: ListemployeedepComponent;
  let fixture: ComponentFixture<ListemployeedepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemployeedepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployeedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
