import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitLogComponent } from './habit-log.component';

describe('HabitLogComponent', () => {
  let component: HabitLogComponent;
  let fixture: ComponentFixture<HabitLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
