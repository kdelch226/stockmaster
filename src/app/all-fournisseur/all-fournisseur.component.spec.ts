import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFournisseurComponent } from './all-fournisseur.component';

describe('AllFournisseurComponent', () => {
  let component: AllFournisseurComponent;
  let fixture: ComponentFixture<AllFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFournisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
