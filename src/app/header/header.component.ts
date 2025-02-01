import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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

  switchLanguage(lang: string) {
    
    if (this.isDefaultLanguage) {
      lang = 'en';
      this.isDefaultLanguage = !this.isDefaultLanguage;
      this.defaultImage = "../../assets/img/header/Property 1=Default@2x.png";
    } else {
      lang = 'de';
      this.isDefaultLanguage = !this.isDefaultLanguage
      this.defaultImage = '../../assets/img/header/Property 1=Deutsch.png';
    }
    console.log(lang)
    this.translateConfigService.changeLanguage(lang);
    this.languageChanged.emit(lang);
  }
}
