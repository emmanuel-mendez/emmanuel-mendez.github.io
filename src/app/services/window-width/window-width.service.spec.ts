import { TestBed } from '@angular/core/testing';
import { WindowWidthService } from './window-width.service';

describe('WindowSizeService', () => {
  let service: WindowWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
