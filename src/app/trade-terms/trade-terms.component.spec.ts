import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTermsComponent } from './trade-terms.component';

describe('TradeTermsComponent', () => {
  let component: TradeTermsComponent;
  let fixture: ComponentFixture<TradeTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
