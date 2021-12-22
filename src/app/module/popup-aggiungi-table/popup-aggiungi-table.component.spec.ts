import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAggiungiTableComponent } from './popup-aggiungi-table.component';

describe('PopupAggiungiTableComponent', () => {
  let component: PopupAggiungiTableComponent;
  let fixture: ComponentFixture<PopupAggiungiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAggiungiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAggiungiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
