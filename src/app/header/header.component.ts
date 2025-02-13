import { CommonModule } from '@angular/common';
import { Component, HostListener, EventEmitter, Output } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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
  constructor(private translateConfigService: TranslateConfigService) { }

  /**
   * Event emitted when scrolling to a section.
   */
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
   * Emits an event to scroll to a specific section of the page.
   * @param sectionId The ID of the section to scroll to.
   */
  onScroll(sectionId: string) {
    this.scrollToSection.emit(sectionId);
  }

  /**
   * Switches the website's language between English and German.
   * @param lang The language to switch to ('en' for English, 'de' for German).
   */
  switchLanguage(lang: string) {
    if (this.isDefaultLanguage) {
      lang = 'en';
      this.isDefaultLanguage = !this.isDefaultLanguage;
      this.defaultImage = "../../assets/img/header/Property 1=Default@2x.png";
    } else {
      lang = 'de';
      this.isDefaultLanguage = !this.isDefaultLanguage;
      this.defaultImage = '../../assets/img/header/Property 1=Deutsch.png';
    }
    this.translateConfigService.changeLanguage(lang);
    this.languageChanged.emit(lang);
  }
}