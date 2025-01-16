import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ScrollAnimateDirective, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  hoveredImage: string | null = null;

  showImage(imagePath: string): void {
    this.hoveredImage = imagePath;
  }

  hideImage(): void {
    this.hoveredImage = null;
  }

  isOverlayVisible: boolean = false;

  showOverlay(): void {
    this.isOverlayVisible = true;
  }

  hideOverlay(): void {
    this.isOverlayVisible = false;
  }

  goToNextProject(): void {
    console.log('Navigating to the next project...');
    // Implementiere hier die Logik für den Wechsel zum nächsten Projekt.
    // Zum Beispiel: Aktualisierung eines Zustands oder Navigation.
  }
}
