import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandesNonRealiserComponent } from './mes-demandes-non-realiser.component';

describe('MesDemandesNonRealiserComponent', () => {
  let component: MesDemandesNonRealiserComponent;
  let fixture: ComponentFixture<MesDemandesNonRealiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDemandesNonRealiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandesNonRealiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
