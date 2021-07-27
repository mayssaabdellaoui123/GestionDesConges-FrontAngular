import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountdelivererComponent } from './myaccountdeliverer.component';

describe('MyaccountdelivererComponent', () => {
  let component: MyaccountdelivererComponent;
  let fixture: ComponentFixture<MyaccountdelivererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountdelivererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountdelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
