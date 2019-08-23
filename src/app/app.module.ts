import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SlideWebDevComponent } from './slide-web-dev/slide-web-dev.component';
import { SlideAppComponent } from './slide-app/slide-app.component';
import { SlideBlockchainComponent } from './slide-blockchain/slide-blockchain.component';
import { AboutBlockchainComponent } from "./about-blockchain/about-blockchain.component";
import { AboutWebdevComponent } from './about-webdev/about-webdev.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    SlideWebDevComponent,
    SlideAppComponent,
    SlideBlockchainComponent,
    AboutBlockchainComponent,
    AboutWebdevComponent,
    AboutAppComponent
  
  ],
  imports: [
    BrowserModule,
    routing,
    LoginModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
