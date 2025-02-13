import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { TranslateModule } from '@ngx-translate/core';
let AboutMeComponent = class AboutMeComponent {
};
AboutMeComponent = __decorate([
    Component({
        selector: 'app-about-me',
        standalone: true,
        imports: [ScrollAnimateDirective, TranslateModule],
        templateUrl: './about-me.component.html',
        styleUrl: './about-me.component.scss'
    })
], AboutMeComponent);
export { AboutMeComponent };
//# sourceMappingURL=about-me.component.js.map