import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUiComponent } from './image-ui.component';

describe('ImageUiComponent', () => {
  let component: ImageUiComponent;
  let fixture: ComponentFixture<ImageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
