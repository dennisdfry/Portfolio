import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en'); 
        this.translate.use(localStorage.getItem('language') || 'en'); 
      }
    
      changeLanguage(lang: string) {
        this.translate.use(lang);
        localStorage.setItem('language', lang); 
      }
    
      getCurrentLanguage() {
        return this.translate.currentLang;
      }
}