import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCongeChefComponent } from './demande-conge-chef.component';

describe('DemandeCongeChefComponent', () => {
  let component: DemandeCongeChefComponent;
  let fixture: ComponentFixture<DemandeCongeChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeCongeChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCongeChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
