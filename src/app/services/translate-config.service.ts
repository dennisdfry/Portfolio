import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
/**
 * Service zur Verwaltung der Sprachkonfiguration in der Anwendung.
 * Ermöglicht das Setzen, Wechseln und Abrufen der aktuellen Sprache.
 */
export class TranslateConfigService {
  
  /**
   * Konstruktor, der den TranslateService initialisiert.
   * Setzt die Standardsprache auf Englisch und lädt die zuletzt gespeicherte Sprache aus dem `localStorage`.
   * 
   * @param translate - Instanz des `TranslateService`, um die Spracheinstellungen zu verwalten.
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
    this.translate.use(localStorage.getItem('language') || 'en'); 
  }

  /**
   * Ändert die aktuelle Sprache der Anwendung und speichert sie im `localStorage`.
   * 
   * @param lang - Die neue Sprache, die gesetzt werden soll (z. B. 'en' oder 'de').
   */
  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang); 
  }

  /**
   * Gibt die aktuell verwendete Sprache zurück.
   * 
   * @returns Die aktuelle Sprachkennung als `string` (z. B. 'en', 'de').
   */
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
