import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeRemplaceurComponent } from './conge-remplaceur.component';

describe('CongeRemplaceurComponent', () => {
  let component: CongeRemplaceurComponent;
  let fixture: ComponentFixture<CongeRemplaceurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeRemplaceurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeRemplaceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
