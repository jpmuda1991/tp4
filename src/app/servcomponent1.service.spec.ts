import { TestBed } from '@angular/core/testing';

import { Servcomponent1Service } from './servcomponent1.service';

describe('Servcomponent1Service', () => {
  let service: Servcomponent1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servcomponent1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
