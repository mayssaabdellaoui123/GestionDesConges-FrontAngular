import { TestBed } from '@angular/core/testing';

import { DemandeCongeBossService } from './demande-conge-boss.service';

describe('DemandeCongeBossService', () => {
  let service: DemandeCongeBossService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeCongeBossService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
