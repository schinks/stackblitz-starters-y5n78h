import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { WebMapModule } from "./web-map/web-map.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebMapModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }