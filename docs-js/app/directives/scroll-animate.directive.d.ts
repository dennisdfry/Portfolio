import { ElementRef, Renderer2 } from '@angular/core';
export declare class ScrollAnimateDirective {
    private el;
    private renderer;
    animationClass: string;
    initialClass: string;
    delay: number;
    constructor(el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    private applyInitialClass;
    private observeElement;
    private triggerAnimation;
}
