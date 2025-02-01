import { Component , EventEmitter, Output} from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive'; 
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  @Output() scrollEvent = new EventEmitter<string>();

  onButtonClick(): void {
    this.scrollEvent.emit('contact'); 
  }
}
