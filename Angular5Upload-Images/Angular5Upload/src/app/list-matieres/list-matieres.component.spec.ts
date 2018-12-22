import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatieresComponent } from './list-matieres.component';

describe('ListMatieresComponent', () => {
  let component: ListMatieresComponent;
  let fixture: ComponentFixture<ListMatieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMatieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
