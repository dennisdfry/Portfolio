import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, HostListener, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
let HeaderComponent = class HeaderComponent {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.languageChanged = new EventEmitter();
        this.scrollToSection = new EventEmitter();
        this.isDropdownOpen = false;
        this.isDefaultLanguage = false;
        this.defaultImage = "../../assets/img/header/Property 1=Default@2x.png";
    }
    openDropDown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    closeDropdownOnClickOutside(event) {
        const dropdown = document.querySelector('.dropdown-menu');
        const dropdownToggle = document.querySelector('.dropdown_image_contain');
        if (dropdown && dropdownToggle &&
            !dropdown.contains(event.target) &&
            !dropdownToggle.contains(event.target)) {
            this.isDropdownOpen = false;
        }
    }
    onScroll(sectionId) {
        this.scrollToSection.emit(sectionId);
    }
    switchLanguage(lang) {
        if (this.isDefaultLanguage) {
            lang = 'en';
            this.isDefaultLanguage = !this.isDefaultLanguage;
            this.defaultImage = "../../assets/img/header/Property 1=Default@2x.png";
        }
        else {
            lang = 'de';
            this.isDefaultLanguage = !this.isDefaultLanguage;
            this.defaultImage = '../../assets/img/header/Property 1=Deutsch.png';
        }
        this.translateConfigService.changeLanguage(lang);
        this.languageChanged.emit(lang);
    }
};
__decorate([
    Output()
], HeaderComponent.prototype, "languageChanged", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    Output()
], HeaderComponent.prototype, "scrollToSection", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        standalone: true,
        imports: [CommonModule, TranslateModule],
        templateUrl: './header.component.html',
        styleUrl: './header.component.scss'
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map