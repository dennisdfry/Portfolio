import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateConfigService } from '../services/translate-config.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, TechnologiesComponent, PortfolioComponent, FeedbackComponent, ContactMeComponent, FooterComponent, TranslateModule, CommonModule ],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent  {
  constructor(private translateConfigService: TranslateConfigService) {}
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onLanguageChanged(lang: string) {
    this.translateConfigService.changeLanguage(lang);
  }
}
