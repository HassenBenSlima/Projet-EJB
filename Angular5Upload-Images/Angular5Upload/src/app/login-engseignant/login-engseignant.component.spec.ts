import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEngseignantComponent } from './login-engseignant.component';

describe('LoginEngseignantComponent', () => {
  let component: LoginEngseignantComponent;
  let fixture: ComponentFixture<LoginEngseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEngseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEngseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
