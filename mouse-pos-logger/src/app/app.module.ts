import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';

import { MySpecialLoggerService } from './my-special-logger.service';

@NgModule({
  declarations: [AppComponent, MouseTrackZoneComponent],
  imports: [BrowserModule],
  providers: [MySpecialLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
