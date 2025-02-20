import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


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
  constructor(private router:Router) {}

  navigateToLegalNotiz() {
    this.router.navigate(['/legal-notiz']);
  }
}