import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Station }        from './Station';

@Injectable()
export class OilStationService {

  /**
   * Backend URL
   */
  private _endpoint = 'http://mon-app.fr';

  constructor (private http: Http) {}

  /**
   * List all Frenchies stations
   * @return {Promise<Station[]>} All stations
   */
  getAllStations () {
    return new Promise((resolve, reject) => {
        this.http
        .get(`${this._endpoint}/api/stations`)
        .subscribe((res: Response) => {
          resolve(res.json() as Station[]);
        },
        (err) => {
          console.error('Fail to execute fetch stations', err);
        });
      });
  }

  /**
   * Get one station with his stationID
   * @param {number} stationID ID of the station
   * @return {Promise<Station>}
   */
  getStation (stationID: number) {
    return new Promise((resolve, reject) => {
        
        this.http
        .get(`${this._endpoint}/api/stations/${stationID}`)
        .subscribe((res: Response) => {
          resolve(res.json() as Station);
        },
        (err) => {
          console.error('Fail to execute fetch stations', err);
        });
      });
  }
}
