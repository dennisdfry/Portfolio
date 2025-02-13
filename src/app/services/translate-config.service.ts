import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing language configuration in the application.
 * Allows setting, switching, and retrieving the current language.
 */
export class TranslateConfigService {
  
  /**
   * Constructor that initializes the TranslateService.
   * Sets the default language to English and loads the last saved language from `localStorage`.
   * 
   * @param translate - Instance of `TranslateService` to manage language settings.
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
    this.translate.use(localStorage.getItem('language') || 'en'); 
  }

  /**
   * Changes the application's current language and stores it in `localStorage`.
   * 
   * @param lang - The new language to be set (e.g., 'en' or 'de').
   */
  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang); 
  }

  /**
   * Returns the currently used language.
   * 
   * @returns The current language code as a `string` (e.g., 'en', 'de').
   */
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
