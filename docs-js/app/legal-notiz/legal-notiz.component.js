import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let LegalNotizComponent = class LegalNotizComponent {
    constructor(legalNotizService) {
        this.legalNotizService = legalNotizService;
        this.isVisible = false;
    }
    ngOnInit() {
        this.legalNotizService.visibility$.subscribe(visible => {
            this.isVisible = visible;
        });
    }
    closeDatenschutz() {
        this.legalNotizService.hide();
    }
};
LegalNotizComponent = __decorate([
    Component({
        selector: 'app-legal-notiz',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './legal-notiz.component.html',
        styleUrls: ['./legal-notiz.component.scss']
    })
], LegalNotizComponent);
export { LegalNotizComponent };
//# sourceMappingURL=legal-notiz.component.js.map