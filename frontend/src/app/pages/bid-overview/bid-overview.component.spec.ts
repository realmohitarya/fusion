import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidOverviewComponent } from './bid-overview.component';

describe('BidOverviewComponent', () => {
  let component: BidOverviewComponent;
  let fixture: ComponentFixture<BidOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BidOverviewComponent]
    });
    fixture = TestBed.createComponent(BidOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
