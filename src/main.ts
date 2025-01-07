import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRouterProviders } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    ...appRouterProviders
  ]
})
  .catch(err => console.error(err));
