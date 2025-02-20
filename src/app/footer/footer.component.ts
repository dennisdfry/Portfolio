import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  /**
   * Creates an instance of FooterComponent.
   * @param legalNotizService The service to handle legal notice display.
   */
  constructor() {}
}