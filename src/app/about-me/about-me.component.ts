import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ScrollAnimateDirective, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent {
}
