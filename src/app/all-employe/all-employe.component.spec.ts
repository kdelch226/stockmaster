import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeComponent } from './all-employe.component';

describe('AllEmployeComponent', () => {
  let component: AllEmployeComponent;
  let fixture: ComponentFixture<AllEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
