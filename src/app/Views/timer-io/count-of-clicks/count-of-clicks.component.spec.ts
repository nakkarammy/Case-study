import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountOfClicksComponent } from './count-of-clicks.component';

describe('CountOfClicksComponent', () => {
  let component: CountOfClicksComponent;
  let fixture: ComponentFixture<CountOfClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountOfClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountOfClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
