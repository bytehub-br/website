import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { AboutBlockchainComponent} from './about-blockchain/about-blockchain.component';
import { AboutWebdevComponent } from './about-webdev/about-webdev.component';
import { AboutAppComponent } from './about-app/about-app.component';

const APP_ROUTES: Routes = [  
  { path: 'about-blockchain', component: AboutBlockchainComponent, pathMatch: 'full' },
  { path: 'about-webdev', component: AboutWebdevComponent, pathMatch: 'full' },
  { path: 'about-app', component: AboutAppComponent, pathMatch: 'full' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
