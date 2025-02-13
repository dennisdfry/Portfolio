import { EventEmitter } from '@angular/core';
import { TranslateConfigService } from '../services/translate-config.service';
export declare class HeaderComponent {
    private translateConfigService;
    languageChanged: EventEmitter<string>;
    scrollToSection: EventEmitter<string>;
    isDropdownOpen: boolean;
    isDefaultLanguage: boolean;
    defaultImage: string;
    constructor(translateConfigService: TranslateConfigService);
    openDropDown(): void;
    closeDropdownOnClickOutside(event: Event): void;
    onScroll(sectionId: string): void;
    switchLanguage(lang: string): void;
}
