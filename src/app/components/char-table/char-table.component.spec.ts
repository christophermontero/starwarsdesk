import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharTableComponent } from './char-table.component';

describe('CharTableComponent', () => {
  let component: CharTableComponent;
  let fixture: ComponentFixture<CharTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharTableComponent]
    });
    fixture = TestBed.createComponent(CharTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
