import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPieChartComponent } from './high-pie-chart.component';

describe('HighPieChartComponent', () => {
  let component: HighPieChartComponent;
  let fixture: ComponentFixture<HighPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
