import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AptitudeComponent,
=======
    AptitudeComponent
>>>>>>> 224617b1e1208ff6362c833876ae87e119baa946
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
