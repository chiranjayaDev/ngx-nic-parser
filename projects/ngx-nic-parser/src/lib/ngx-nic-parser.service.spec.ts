import { TestBed } from '@angular/core/testing';

import { NgxNicParserService } from './ngx-nic-parser.service';

describe('NgxNicParserService', () => {
  let service: NgxNicParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNicParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
