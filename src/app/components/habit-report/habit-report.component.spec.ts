import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitReportComponent } from './habit-report.component';

describe('HabitReportComponent', () => {
  let component: HabitReportComponent;
  let fixture: ComponentFixture<HabitReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
