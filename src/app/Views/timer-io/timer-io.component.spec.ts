import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerIOComponent } from './timer-io.component';

describe('TimerIOComponent', () => {
  let component: TimerIOComponent;
  let fixture: ComponentFixture<TimerIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
