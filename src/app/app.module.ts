import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBroadcasterModule } from 'projects/ng-broadcaster/src/public_api';
import { SampleComponent } from './sample/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    NgBroadcasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
