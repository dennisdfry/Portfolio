import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive'; 
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
/**
 * Component that displays technology-related content.
 * Includes animations and supports multi-language translations.
 */
export class TechnologiesComponent {
  
  /**
   * Event emitter that triggers when the user clicks a button.
   * Emits a scroll event with a section ID.
   */
  @Output() scrollEvent = new EventEmitter<string>();

  /**
   * Handles the button click event and emits a scroll event 
   * to navigate to the 'contact' section.
   */
  onButtonClick(): void {
    this.scrollEvent.emit('contact'); 
  }
}