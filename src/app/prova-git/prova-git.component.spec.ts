import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaGitComponent } from './prova-git.component';

describe('ProvaGitComponent', () => {
  let component: ProvaGitComponent;
  let fixture: ComponentFixture<ProvaGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
