import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import 'zone.js';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
