import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective {
  @Input() animationClass: string = 'slide-in-right'; 
  @Input() initialClass: string = 'initial-hidden'; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Setze die Ausgangsklasse
    if (this.initialClass) {
      this.renderer.addClass(this.el.nativeElement, this.initialClass);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            if (this.initialClass) {
              this.renderer.removeClass(this.el.nativeElement, this.initialClass);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }
}

