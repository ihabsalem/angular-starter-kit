import { TestBed, inject } from '@angular/core/testing';

import { AppHttpRequestsService } from './app-http-requests.service';

describe('AppHttpRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHttpRequestsService]
    });
  });

  it('should be created', inject([AppHttpRequestsService], (service: AppHttpRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
