import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditBookingsComponent } from './popup-edit-bookings.component';

describe('PopupEditBookingsComponent', () => {
  let component: PopupEditBookingsComponent;
  let fixture: ComponentFixture<PopupEditBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
