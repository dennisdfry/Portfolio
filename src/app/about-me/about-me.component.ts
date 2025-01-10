import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive'; 

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent {
  
}
