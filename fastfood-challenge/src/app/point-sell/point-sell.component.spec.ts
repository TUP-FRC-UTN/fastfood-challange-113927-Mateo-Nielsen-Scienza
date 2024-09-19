import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSellComponent } from './point-sell.component';

describe('PointSellComponent', () => {
  let component: PointSellComponent;
  let fixture: ComponentFixture<PointSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
