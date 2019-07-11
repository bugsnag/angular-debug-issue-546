"use strict";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WebService } from './web/web.service';

import bugsnag from '@bugsnag/js'
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular'

const bugsnagClient = bugsnag('YOUR_API_KEY')

export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useFactory: errorHandlerFactory },
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
