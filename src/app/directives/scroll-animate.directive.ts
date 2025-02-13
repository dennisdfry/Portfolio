import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective {
  @Input() animationClass: string = 'slide-in-right';
  @Input() initialClass: string = 'initial-hidden';
  @Input() delay: number = 100;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.applyInitialClass();
    this.observeElement();
  }

  private applyInitialClass(): void {
    if (this.initialClass) {
      this.renderer.addClass(this.el.nativeElement, this.initialClass);
    }
  }

  private observeElement(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.triggerAnimation();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.el.nativeElement);
  }

  private triggerAnimation(): void {
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
      if (this.initialClass) {
        this.renderer.removeClass(this.el.nativeElement, this.initialClass);
      }
    }, this.delay);
  }
}