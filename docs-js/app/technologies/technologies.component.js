import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { TranslateModule } from '@ngx-translate/core';
let TechnologiesComponent = class TechnologiesComponent {
    constructor() {
        this.scrollEvent = new EventEmitter();
    }
    onButtonClick() {
        this.scrollEvent.emit('contact');
    }
};
__decorate([
    Output()
], TechnologiesComponent.prototype, "scrollEvent", void 0);
TechnologiesComponent = __decorate([
    Component({
        selector: 'app-technologies',
        standalone: true,
        imports: [ScrollAnimateDirective, TranslateModule],
        templateUrl: './technologies.component.html',
        styleUrl: './technologies.component.scss'
    })
], TechnologiesComponent);
export { TechnologiesComponent };
//# sourceMappingURL=technologies.component.js.map