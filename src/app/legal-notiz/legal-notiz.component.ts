import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notiz',
  standalone: true,
  imports:[CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './legal-notiz.component.html',
  styleUrls: ['./legal-notiz.component.scss']
})
export class LegalNotizComponent  {

  constructor(private router: Router) {}

  navigateToLegalNotiz() {
    this.router.navigate(['']);
  }
}
