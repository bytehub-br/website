import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBlockchainComponent } from './slide-blockchain.component';

describe('SlideBlockchainComponent', () => {
  let component: SlideBlockchainComponent;
  let fixture: ComponentFixture<SlideBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
