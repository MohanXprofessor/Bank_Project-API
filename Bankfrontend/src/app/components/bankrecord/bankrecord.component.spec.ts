import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankrecordComponent } from './bankrecord.component';

describe('BankrecordComponent', () => {
  let component: BankrecordComponent;
  let fixture: ComponentFixture<BankrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankrecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
