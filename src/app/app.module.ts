import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MnFullpageModule } from 'ngx-fullpage';
import { SlideWebDevComponent } from './slide-web-dev/slide-web-dev.component';
import { SlideAppComponent } from './slide-app/slide-app.component';
import { SlideBlockchainComponent } from './slide-blockchain/slide-blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideWebDevComponent,
    SlideAppComponent,
    SlideBlockchainComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
