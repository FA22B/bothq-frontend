import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PluginSettingsComponent } from './components/plugin-settings/plugin-settings.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    PluginSettingsComponent
  ],
  providers: [],
// @ts-ignore
  bootstrap: [bootstrapApplication(AppComponent)]
})
export class AppModule { }
