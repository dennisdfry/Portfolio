import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
        this.translate.setDefaultLang('en');
        this.translate.use(localStorage.getItem('language') || 'en');
    }
    changeLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('language', lang);
    }
    getCurrentLanguage() {
        return this.translate.currentLang;
    }
};
TranslateConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TranslateConfigService);
export { TranslateConfigService };
//# sourceMappingURL=translate-config.service.js.map