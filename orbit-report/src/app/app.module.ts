import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitReportComponent } from './orbit-report/orbit-report.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitReportComponent,
    OrbitListComponent,
    OrbitCountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
