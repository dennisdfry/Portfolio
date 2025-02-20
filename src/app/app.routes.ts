import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegalNotizComponent } from './legal-notiz/legal-notiz.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent }, // Standardroute zur Hauptseite
  { path: 'legal-notiz', component: LegalNotizComponent }, // Route für die Legal-Notiz-Seite
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback für nicht definierte Routen
];
