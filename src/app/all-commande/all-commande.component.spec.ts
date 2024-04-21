import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommandeComponent } from './all-commande.component';

describe('AllCommandeComponent', () => {
  let component: AllCommandeComponent;
  let fixture: ComponentFixture<AllCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
