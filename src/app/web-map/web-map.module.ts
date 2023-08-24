import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebMapComponent } from './web-map.component';

@NgModule({
    declarations: [WebMapComponent],
    imports: [BrowserModule, CommonModule, HttpClientModule],
    exports: [WebMapComponent]    
})
export class WebMapModule { }
