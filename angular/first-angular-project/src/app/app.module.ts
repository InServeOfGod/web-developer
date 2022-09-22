import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';

@NgModule({
  declarations: [
	AppComponent,
 RedComponent,
 GreenComponent,
 BlueComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
