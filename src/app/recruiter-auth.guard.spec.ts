import { TestBed } from '@angular/core/testing';

import { RecruiterAuthGuard } from './recruiter-auth.guard';

describe('RecruiterAuthGuard', () => {
  let guard: RecruiterAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RecruiterAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
