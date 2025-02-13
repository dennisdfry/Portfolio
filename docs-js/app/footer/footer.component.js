import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FooterComponent = class FooterComponent {
    constructor(legalNotizService) {
        this.legalNotizService = legalNotizService;
    }
    openLegalNotiz() {
        this.legalNotizService.show(); // Zeigt die rechtliche Notiz an
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        standalone: true,
        imports: [],
        templateUrl: './footer.component.html',
        styleUrl: './footer.component.scss'
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map