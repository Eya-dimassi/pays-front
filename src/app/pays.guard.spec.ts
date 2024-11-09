import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { paysGuard } from './pays.guard';

describe('paysGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => paysGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
