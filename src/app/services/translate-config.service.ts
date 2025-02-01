import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en'); // Standard-Sprache Deutsch setzen
        this.translate.use(localStorage.getItem('language') || 'en'); // Gespeicherte Sprache verwenden
      }
    
      changeLanguage(lang: string) {
        this.translate.use(lang);
        localStorage.setItem('language', lang); // Sprache in LocalStorage speichern
      }
    
      getCurrentLanguage() {
        return this.translate.currentLang;
      }
}