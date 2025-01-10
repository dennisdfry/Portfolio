import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive'; 
@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

}
