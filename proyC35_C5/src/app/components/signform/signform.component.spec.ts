import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignformComponent } from './signform.component';

describe('SignformComponent', () => {
  let component: SignformComponent;
  let fixture: ComponentFixture<SignformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignformComponent]
    });
    fixture = TestBed.createComponent(SignformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
