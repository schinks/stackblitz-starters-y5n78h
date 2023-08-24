import { Component } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import { Observable, take } from 'rxjs';
import { WebMapService } from './web-map.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mapViewLoaded!: Observable<MapView>;

  constructor(private mapService: WebMapService) {
    this.mapViewLoaded = this.mapService.viewLoaded.pipe(take(1));
  }
}
