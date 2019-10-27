import { TestBed } from '@angular/core/testing';

import { ErrorMessageInterceptorService } from './error-message-interceptor.service';

describe('ErrorMessageInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorMessageInterceptorService = TestBed.get(ErrorMessageInterceptorService);
    expect(service).toBeTruthy();
  });
});
