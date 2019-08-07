import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { LogoComponent } from './home/logo/logo.component';
import { PresentationTitleComponent } from './presentation-title/presentation-title.component';
import { MainIllustrationComponent } from './main-illustration/main-illustration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { PresentationTextComponent } from './home/main-content/presentation-text/presentation-text.component';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
