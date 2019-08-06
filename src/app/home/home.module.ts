import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from '../material/material.module';
import { LogoComponent } from './logo/logo.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PresentationTextComponent } from './main-content/presentation-text/presentation-text.component';
import { MainImageComponent } from './main-content/main-image/main-image.component';




@NgModule({
  declarations: [HomeComponent, MainMenuComponent, LogoComponent, MainContentComponent, PresentationTextComponent, MainImageComponent],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    HomeComponent,
    MainMenuComponent
  ]
})
export class HomeModule { }
