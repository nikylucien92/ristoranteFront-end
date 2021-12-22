import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditTableComponent } from './popup-edit-table.component';

describe('PopupEditTableComponent', () => {
  let component: PopupEditTableComponent;
  let fixture: ComponentFixture<PopupEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
