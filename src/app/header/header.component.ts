import { CommonModule } from '@angular/common';
import { Component,HostListener, EventEmitter, Output } from '@angular/core';
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
  @Output() languageChanged = new EventEmitter<string>();
  
  isDropdownOpen = false;
  isDefaultLanguage = false;
  defaultImage = "../../assets/img/header/Property 1=Default@2x.png";
  constructor(private translateConfigService: TranslateConfigService) { }



  openDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
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
