import { CommonModule } from '@angular/common';
import { Component, HostListener, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  

  /**
   * Event emitted when the language is changed.
   */
  @Output() languageChanged = new EventEmitter<string>();

  /**
   * Flag indicating if the dropdown menu is open.
   */
  isDropdownOpen = false;

  /**
   * Flag indicating if the default language is currently selected.
   */
  isDefaultLanguage = false;

  /**
   * Default image path for the language toggle button.
   */
  defaultImage = "../../assets/img/header/Property 1=Default@2x.png";

  /**
   * Creates an instance of HeaderComponent.
   * @param translateConfigService The service for handling language changes.
   */
  constructor(
    private translateConfigService: TranslateConfigService,
    private router: Router
  ) { }
  @Output() scrollToSection = new EventEmitter<string>();
  /**
   * Toggles the state of the dropdown menu.
   */
  openDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Closes the dropdown menu when a click occurs outside of it.
   * @param event The click event.
   */
  @HostListener('document:click', ['$event'])
  closeDropdownOnClickOutside(event: Event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const dropdownToggle = document.querySelector('.dropdown_image_contain');

    if (dropdown && dropdownToggle &&
      !dropdown.contains(event.target as Node) &&
      !dropdownToggle.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }

  /**
  * Closes the dropdown menu when the user scrolls.
  */
  @HostListener('window:scroll', ['$event'])
  closeDropdownOnScroll() {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  /**
 * Handles scrolling to a specific section or navigating to the main page.
 * If the current route is not the main page, it stores the sectionId in localStorage.
 * After navigation, it retrieves the sectionId from localStorage and scrolls to the specified section.
 * Finally, it clears the sectionId from localStorage to avoid conflicts on the next call.
 * @param {string} sectionId - The ID of the section to scroll to.
 */
onScroll(sectionId: string): void {
  if (this.router.url !== '/') {
    localStorage.setItem('scrollSectionId', sectionId);
    this.router.navigate(['/'])
  } else {
    this.scrollToSection.emit(sectionId);
  }
}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('language') || 'en';
    this.isDefaultLanguage = savedLang === 'en';
    this.defaultImage = savedLang === 'en'
      ? "../../assets/img/header/Property 1=Default@2x.png"
      : "../../assets/img/header/Property 1=Deutsch.png";

    this.translateConfigService.changeLanguage(savedLang);
  }

  /**
   * Switches the website's language between English and German.
   * @param lang The language to switch to ('en' for English, 'de' for German).
   */
  switchLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'de' : 'en';

    this.isDefaultLanguage = newLang === 'en';
    this.defaultImage = newLang === 'en'
      ? "../../assets/img/header/Property 1=Default@2x.png"
      : "../../assets/img/header/Property 1=Deutsch.png";

    this.translateConfigService.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    this.languageChanged.emit(newLang);
  }

}