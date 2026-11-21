import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';
@Directive({ selector: '[appReveal]', host: { class: 'reveal' } })
export class Reveal implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  ngAfterViewInit() {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      this.element.nativeElement.classList.add('visible');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.element.nativeElement.classList.add('visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    this.observer.observe(this.element.nativeElement);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
