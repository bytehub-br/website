import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideWebDevComponent } from './slide-web-dev.component';

describe('SlideWebDevComponent', () => {
  let component: SlideWebDevComponent;
  let fixture: ComponentFixture<SlideWebDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideWebDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideWebDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
