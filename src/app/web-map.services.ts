import { Injectable, ViewContainerRef } from '@angular/core';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import TileInfo from '@arcgis/core/layers/support/TileInfo';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import esri = __esri;

@Injectable({
  providedIn: 'root',
})
export class WebMapService {
  private loadedSubj = new ReplaySubject<MapView>(1);
  viewLoaded = this.loadedSubj.asObservable();

  private view: MapView;

  scaleChanged = new ReplaySubject<number>(1);

  constructor() {}

  initializeMap(container: HTMLDivElement): Observable<MapView> {    
    if (!this.view) {
      // set map size and position within page
      container.style.width = '400';
      container.style.height = '400';

      container.style.position = 'fixed';

      container.style.top = 'unset';
      container.style.left = 'unset';
      container.style.bottom = 'unset';
      container.style.right = 'unset';

      container.tabIndex = -1;      

      const webmap = new WebMap({
        basemap: 'satellite',
      });

      this.view = new MapView({
        container: container,
        constraints: {
          lods: TileInfo.create().lods,
        },
        map: webmap,
        extent: {
          xmin: -145,
          xmax: -46,
          ymin: 24,
          ymax: 51,
        },
      });

      this.view.when(
        () => this.mapViewLoaded(this.view),
        (err: any) => this.mapViewError(err)
      );
    }

    return this.viewLoaded;
  }

  destroyMap(): void {
    this.loadedSubj.complete();

    this.loadedSubj = new ReplaySubject<MapView>(1);

    this.viewLoaded = this.loadedSubj.asObservable();

    this.view.destroy();
  }

  private mapViewLoaded(view: MapView): void {
    // this.view = view;

    // // remove the default attribution widget
    // // this.view?.ui.remove('attribution');

    // reactiveUtils.when(
    //   () => this.view?.stationary,
    //   (): void => this.mapScaleChanged(this.view?.scale ?? 0)
    // );

    // if(this.view!){
    //   this.loadedSubj.next(this.view);
    // }
  }

  private mapViewError(err: any): void {
    console.error(err);
    this.loadedSubj.error(err);
  }

  private mapScaleChanged(scale: number): void {
    this.scaleChanged.next(scale);
  }
}
