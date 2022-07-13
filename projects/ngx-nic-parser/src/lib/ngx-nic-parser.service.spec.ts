import { TestBed } from '@angular/core/testing';

import { NgxNicParserService } from './ngx-nic-parser.service';

describe('NgxNicParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNicParserService = TestBed.get(NgxNicParserService);
    expect(service).toBeTruthy();
  });
});
