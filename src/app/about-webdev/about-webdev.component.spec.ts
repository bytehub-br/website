import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWebdevComponent } from './about-webdev.component';

describe('AboutWebdevComponent', () => {
  let component: AboutWebdevComponent;
  let fixture: ComponentFixture<AboutWebdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWebdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
