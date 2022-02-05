import { TestBed } from '@angular/core/testing';

import { CoursesControllerService } from './courses-controller.service';

describe('CoursesControllerService', () => {
  let service: CoursesControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
