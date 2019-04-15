import { TestBed } from '@angular/core/testing';

import { NgBroadcasterService } from './ng-broadcaster.service';

describe('NgBroadcasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBroadcasterService = TestBed.get(NgBroadcasterService);
    expect(service).toBeTruthy();
  });
});
