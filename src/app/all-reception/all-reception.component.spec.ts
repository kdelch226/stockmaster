import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReceptionComponent } from './all-reception.component';

describe('AllReceptionComponent', () => {
  let component: AllReceptionComponent;
  let fixture: ComponentFixture<AllReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllReceptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
