import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeDirecteurGeneraleComponent } from './conge-directeur-generale.component';

describe('CongeDirecteurGeneraleComponent', () => {
  let component: CongeDirecteurGeneraleComponent;
  let fixture: ComponentFixture<CongeDirecteurGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeDirecteurGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeDirecteurGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
