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
  constructor(private legalNotizService: LegalNotizService) {}

  openLegalNotiz(): void {
    this.legalNotizService.show(); // Zeigt die rechtliche Notiz an
  }
}
