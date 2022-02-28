import { TestBed } from '@angular/core/testing';

import { Servcomponent2Service } from './servcomponent2.service';

describe('Servcomponent2Service', () => {
  let service: Servcomponent2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servcomponent2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
