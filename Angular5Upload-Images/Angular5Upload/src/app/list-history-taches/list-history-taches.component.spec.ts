import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoryTachesComponent } from './list-history-taches.component';

describe('ListHistoryTachesComponent', () => {
  let component: ListHistoryTachesComponent;
  let fixture: ComponentFixture<ListHistoryTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHistoryTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHistoryTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
