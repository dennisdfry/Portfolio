import { Component } from '@angular/core';
import { LegalNotizService } from '../legal-notiz.service';
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
  constructor(private legalNotizService: LegalNotizService) {}

  /**
   * Opens the legal notice when triggered.
   * Calls the `show` method from the LegalNotizService to display the legal notice.
   */
  openLegalNotiz(): void {
    this.legalNotizService.show(); 
  }
}