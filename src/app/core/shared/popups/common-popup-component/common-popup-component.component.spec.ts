import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPopupComponentComponent } from './common-popup-component.component';

describe('CommonPopupComponentComponent', () => {
  let component: CommonPopupComponentComponent;
  let fixture: ComponentFixture<CommonPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPopupComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
