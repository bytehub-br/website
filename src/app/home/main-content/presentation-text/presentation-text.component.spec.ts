import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationTextComponent } from './presentation-text.component';

describe('PresentationTextComponent', () => {
  let component: PresentationTextComponent;
  let fixture: ComponentFixture<PresentationTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
