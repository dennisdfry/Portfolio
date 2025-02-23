import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {


  constructor(private router: Router) {}

  navigateToLegal() {
    this.router.navigate(['/legal-notiz']);
  }
  navigateToMainPage(){
    this.router.navigate(['']);
  }
}
