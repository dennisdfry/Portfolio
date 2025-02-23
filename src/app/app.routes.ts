import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LegalNotizComponent } from './legal-notiz/legal-notiz.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent }, 
  { path: 'impressum', component: ImpressumComponent }, 
  { path: 'legal-notiz', component: LegalNotizComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];
