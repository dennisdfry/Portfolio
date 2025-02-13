import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
let ScrollAnimateDirective = class ScrollAnimateDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.animationClass = 'slide-in-right';
        this.initialClass = 'initial-hidden';
        this.delay = 100;
    }
    ngAfterViewInit() {
        this.applyInitialClass();
        this.observeElement();
    }
    applyInitialClass() {
        if (this.initialClass) {
            this.renderer.addClass(this.el.nativeElement, this.initialClass);
        }
    }
    observeElement() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.triggerAnimation();
                }
            });
        }, { threshold: 0.2 });
        observer.observe(this.el.nativeElement);
    }
    triggerAnimation() {
        setTimeout(() => {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            if (this.initialClass) {
                this.renderer.removeClass(this.el.nativeElement, this.initialClass);
            }
        }, this.delay);
    }
};
__decorate([
    Input()
], ScrollAnimateDirective.prototype, "animationClass", void 0);
__decorate([
    Input()
], ScrollAnimateDirective.prototype, "initialClass", void 0);
__decorate([
    Input()
], ScrollAnimateDirective.prototype, "delay", void 0);
ScrollAnimateDirective = __decorate([
    Directive({
        standalone: true,
        selector: '[appScrollAnimate]',
    })
], ScrollAnimateDirective);
export { ScrollAnimateDirective };
//# sourceMappingURL=scroll-animate.directive.js.map