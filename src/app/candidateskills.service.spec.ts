import { TestBed } from '@angular/core/testing';

import { CandidateskillsService } from './Candidateskills.service';

describe('CompanyskillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateskillsService = TestBed.get(CandidateskillsService);
    expect(service).toBeTruthy();
  });
});
