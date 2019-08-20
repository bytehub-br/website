import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import {BlockchainComponent} from './blockchain/blockchain.component'

const APP_ROUTES: Routes = [  
  { path: 'blockchain', component: BlockchainComponent, pathMatch: 'full' }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
