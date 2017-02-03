import { Component, OnInit, Input } from '@angular/core';
import { OilStationService } from '../oil-station.service';
import { Station } from '../station';

@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.css'],
  providers: [
    OilStationService
  ]
})
export class StationsMapComponent implements OnInit {

  /**
   * Default map position
   */
  @Input() defaultPosition: {
    lat: number,
    long: number,
    zoom: number
  }

  /**
   * List of all stations display as Marker
   */
  stations: Station[];

  /**
   * Choosen Station
   */
  currentStation: Station;

  constructor(private stationService: OilStationService) {}

  ngOnInit() {
    
    this.stations = [];
    this.defaultPosition = {
      lat: 48.4070554,
      long: -4.495554,
      zoom: 9
    }

    this
    .stationService
    .getAllStations()
    .then((stations: Station[]) => {
      let webCamp = new Station(48.4070554, -4.495554, "ISEN School");
      webCamp.icon = '/assets/school.svg';
      
      this.stations = stations.concat([webCamp]);
      console.log(this.stations);
    });
  }

  /**
   * When an user click on a station on the map
   * @param {Station} stationMarker Station clicked  
   */
  stationClicked(stationMarker: Station, i: number) {
    
    console.log(`Selected station: ${i}`, stationMarker);

    if (stationMarker.id) {
      this
      .stationService
      .getStation(stationMarker.id)
      .then((station: Station) => {
        this.currentStation = station;
      });
    }
  }
}
