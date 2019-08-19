import { TestBed } from '@angular/core/testing';

import { CompanyskillsService } from './companyskills.service';

describe('CompanyskillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyskillsService = TestBed.get(CompanyskillsService);
    expect(service).toBeTruthy();
  });
});
