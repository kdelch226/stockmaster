import { TestBed } from '@angular/core/testing';

import { CommandePanierService } from './commande-panier.service';

describe('CommandePanierService', () => {
  let service: CommandePanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandePanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
