import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output  } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() languageChanged = new EventEmitter<string>();

  isDropdownOpen = false;

  openDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
  }
}
