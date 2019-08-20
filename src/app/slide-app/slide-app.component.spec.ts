import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAppComponent } from './slide-app.component';

describe('SlideAppComponent', () => {
  let component: SlideAppComponent;
  let fixture: ComponentFixture<SlideAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
