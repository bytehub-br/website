import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlockchainComponent } from './about-blockchain.component';

describe('AboutBlockchainComponent', () => {
  let component: AboutBlockchainComponent;
  let fixture: ComponentFixture<AboutBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
