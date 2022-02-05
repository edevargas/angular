import { TestBed } from '@angular/core/testing';

import { LessonsControllerService } from './lessons-controller.service';

describe('LessonsControllerService', () => {
  let service: LessonsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
