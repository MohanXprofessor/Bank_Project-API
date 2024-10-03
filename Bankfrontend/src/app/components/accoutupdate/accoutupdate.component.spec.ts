import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutupdateComponent } from './accoutupdate.component';

describe('AccoutupdateComponent', () => {
  let component: AccoutupdateComponent;
  let fixture: ComponentFixture<AccoutupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccoutupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccoutupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
