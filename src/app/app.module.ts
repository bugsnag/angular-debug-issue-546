import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WebService } from './web/web.service';

import bugsnag from '@bugsnag/js';
import { BugsnagErrorHandler } from '@bugsnag/plugin-angular';

export const bugsnagClient = bugsnag({
  apiKey: 'Your app key',
  appVersion: 'v1',
  autoCaptureSessions: true,
  user: {userId: 'abcd'},
});

export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient);
}

@NgModule({
  providers: [{ provide: ErrorHandler, useFactory: errorHandlerFactory }]
})
export class BugsangModule {
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
