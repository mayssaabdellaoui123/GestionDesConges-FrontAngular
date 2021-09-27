import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCongeServiceADComponent } from './demande-conge-service-ad.component';

describe('DemandeCongeServiceADComponent', () => {
  let component: DemandeCongeServiceADComponent;
  let fixture: ComponentFixture<DemandeCongeServiceADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeCongeServiceADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCongeServiceADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
