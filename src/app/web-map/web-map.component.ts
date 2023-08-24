import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import { last } from 'rxjs';
import { WebMapService } from '../web-map.services';

@Component({
  selector: 'web-map',
  templateUrl: './web-map.component.html',
  styleUrls: ['./web-map.component.scss'],
})
export class WebMapComponent implements OnDestroy, AfterViewInit {
  private view!: MapView;

  @ViewChild('mapViewNode', { static: true })
  private mapViewEl!: ElementRef;

  constructor(private mapService: WebMapService) {}

  ngAfterViewInit(): void {
    this.mapService
      .initializeMap(
        this.mapViewEl.nativeElement        
      )
      .pipe(last())
      .subscribe((view) => {
        
        this.view = view;
      });
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.destroy();
    }
  }
}
