import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacecraftInfoComponent } from './spacecraft-info.component';

describe('SpacecraftInfoComponent', () => {
  let component: SpacecraftInfoComponent;
  let fixture: ComponentFixture<SpacecraftInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftInfoComponent]
    });
    fixture = TestBed.createComponent(SpacecraftInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
