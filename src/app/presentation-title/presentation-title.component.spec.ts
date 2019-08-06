import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationTitleComponent } from './presentation-title.component';

describe('PresentationTitleComponent', () => {
  let component: PresentationTitleComponent;
  let fixture: ComponentFixture<PresentationTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
