import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawaccountComponent } from './withdrawaccount.component';

describe('WithdrawaccountComponent', () => {
  let component: WithdrawaccountComponent;
  let fixture: ComponentFixture<WithdrawaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithdrawaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithdrawaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
