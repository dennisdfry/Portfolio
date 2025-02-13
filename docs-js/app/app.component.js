import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio-website';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [CommonModule, RouterOutlet, MainpageComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.scss'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map