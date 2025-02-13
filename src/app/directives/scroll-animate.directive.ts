import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

/**
 * Directive to apply scroll-based animations to elements.
 * Elements will receive an initial hidden class and an animation class when they come into view.
 */
@Directive({
  standalone: true,
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective {
  /**
   * CSS class that will be applied when the element enters the viewport.
   * @default 'slide-in-right'
   */
  @Input() animationClass: string = 'slide-in-right';

  /**
   * CSS class that is initially applied to hide the element.
   * @default 'initial-hidden'
   */
  @Input() initialClass: string = 'initial-hidden';

  /**
   * Delay in milliseconds before applying the animation.
   * @default 100
   */
  @Input() delay: number = 100;

  /**
   * Creates an instance of ScrollAnimateDirective.
   * @param el Reference to the host element.
   * @param renderer Angular Renderer2 for DOM manipulations.
   */
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  /**
   * Lifecycle hook that runs after the component view has been initialized.
   * It applies the initial class and sets up the IntersectionObserver.
   */
  ngAfterViewInit(): void {
    this.applyInitialClass();
    this.observeElement();
  }

  /**
   * Adds the initial class to the element to keep it hidden before animation.
   */
  private applyInitialClass(): void {
    if (this.initialClass) {
      this.renderer.addClass(this.el.nativeElement, this.initialClass);
    }
  }

  /**
   * Sets up an IntersectionObserver to detect when the element enters the viewport.
   * Once visible, it triggers the animation.
   */
  private observeElement(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.triggerAnimation();
          }
        });
      },
      { threshold: 0.2 } // Element must be at least 20% visible to trigger
    );
    observer.observe(this.el.nativeElement);
  }

  /**
   * Applies the animation class and removes the initial class after a delay.
   */
  private triggerAnimation(): void {
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement, this.animationClass);
      if (this.initialClass) {
        this.renderer.removeClass(this.el.nativeElement, this.initialClass);
      }
    }, this.delay);
  }
}