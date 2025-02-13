import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let LegalNotizService = class LegalNotizService {
    constructor() {
        this.visibilitySubject = new BehaviorSubject(false);
        this.visibility$ = this.visibilitySubject.asObservable();
    }
    show() {
        this.visibilitySubject.next(true);
    }
    hide() {
        this.visibilitySubject.next(false);
    }
};
LegalNotizService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LegalNotizService);
export { LegalNotizService };
//# sourceMappingURL=legal-notiz.service.js.map