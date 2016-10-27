import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';

export const router: Routes = [
    { path: '', redirectTo: 'howto', pathMatch: 'full' },
    { path: 'howto', component: HowtoComponent },
    { path: 'examples', component: ExamplesComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);