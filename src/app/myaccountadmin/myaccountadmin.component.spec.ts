import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountadminComponent } from './myaccountadmin.component';

describe('MyaccountadminComponent', () => {
  let component: MyaccountadminComponent;
  let fixture: ComponentFixture<MyaccountadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
