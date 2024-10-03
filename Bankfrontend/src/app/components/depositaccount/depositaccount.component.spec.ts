import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositaccountComponent } from './depositaccount.component';

describe('DepositaccountComponent', () => {
  let component: DepositaccountComponent;
  let fixture: ComponentFixture<DepositaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
