import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAuthoritiesComponent } from './navbar-authorities.component';

describe('NavbarAuthoritiesComponent', () => {
  let component: NavbarAuthoritiesComponent;
  let fixture: ComponentFixture<NavbarAuthoritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAuthoritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
