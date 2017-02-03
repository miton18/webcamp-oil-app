import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { OilStationService } from './oil-station.service';
import { StationsMapComponent } from './stations-map/stations-map.component';
import { StationInfoComponent } from './station-info/station-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsMapComponent,
    StationInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAaxubXENQCfVQTDC1rsBRKhv4TP9At-6k"
    })
  ],
  providers: [
    OilStationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
