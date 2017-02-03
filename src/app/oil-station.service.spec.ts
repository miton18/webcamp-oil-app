/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OilStationService } from './oil-station.service';

describe('OilStationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OilStationService]
    });
  });

  it('should ...', inject([OilStationService], (service: OilStationService) => {
    expect(service).toBeTruthy();
  }));
});
