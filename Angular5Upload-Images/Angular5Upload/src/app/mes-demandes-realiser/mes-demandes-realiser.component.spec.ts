import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandesRealiserComponent } from './mes-demandes-realiser.component';

describe('MesDemandesRealiserComponent', () => {
  let component: MesDemandesRealiserComponent;
  let fixture: ComponentFixture<MesDemandesRealiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesDemandesRealiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandesRealiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
