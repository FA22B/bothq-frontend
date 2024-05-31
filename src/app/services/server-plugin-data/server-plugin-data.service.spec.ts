import { TestBed } from '@angular/core/testing';

import { ServerPluginDataService } from './server-plugin-data.service';

describe('PluginDataService', () => {
  let service: ServerPluginDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerPluginDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
