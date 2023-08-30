import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrescriptionModule } from "./modules/prescription/prescription.module";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { CustomPaginator } from "./utility/utility";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule,     HttpClientModule, PrescriptionModule],
  providers: [ { provide: MatPaginatorIntl, useValue: CustomPaginator() }],
  bootstrap: [AppComponent],
})
export class AppModule {}
