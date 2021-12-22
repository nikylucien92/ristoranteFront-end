import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNewBookComponent } from './popup-new-book.component';

describe('PopupNewBookComponent', () => {
  let component: PopupNewBookComponent;
  let fixture: ComponentFixture<PopupNewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNewBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
