import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNotizComponent } from '../legal-notiz/legal-notiz.component';
let MainpageComponent = class MainpageComponent {
    constructor(translateConfigService, legalNotizService) {
        this.translateConfigService = translateConfigService;
        this.legalNotizService = legalNotizService;
    }
    scrollToSection(sectionId) {
        console.log(sectionId);
        const element = document.getElementById(sectionId);
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    onLanguageChanged(lang) {
        this.translateConfigService.changeLanguage(lang);
    }
    openLegalNotiz() {
        this.legalNotizService.show();
    }
    closeLegalNotiz() {
        this.legalNotizService.hide();
    }
};
MainpageComponent = __decorate([
    Component({
        selector: 'app-mainpage',
        standalone: true,
        imports: [HeaderComponent, AboutMeComponent, TechnologiesComponent, PortfolioComponent, FeedbackComponent, ContactMeComponent, FooterComponent, TranslateModule, LegalNotizComponent, CommonModule],
        templateUrl: './mainpage.component.html',
        styleUrl: './mainpage.component.scss'
    })
], MainpageComponent);
export { MainpageComponent };
//# sourceMappingURL=mainpage.component.js.map