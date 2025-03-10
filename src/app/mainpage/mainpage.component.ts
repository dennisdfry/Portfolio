import { Component, OnInit } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, TechnologiesComponent, PortfolioComponent, FeedbackComponent, ContactMeComponent, FooterComponent, TranslateModule, CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit  {

  /**
   * Creates an instance of MainpageComponent.
   * @param translateConfigService The service for handling language translation.
   * @param legalNotizService The service for controlling the visibility of the legal notice.
   */
  constructor(private translateConfigService: TranslateConfigService,
    private router: Router
 ){}

     /**
   * Initializes the component.
   * Checks if a sectionId is stored in localStorage and scrolls to it if present.
   */
  ngOnInit(): void {
    const sectionId = localStorage.getItem('scrollSectionId');

    if (sectionId) {
      setTimeout(() => {
        this.scrollToSection(sectionId);
      }, 100);
      localStorage.removeItem('scrollSectionId');
    }
  }


  /**
   * Scrolls the page to a section specified by its ID.
   * @param sectionId The ID of the section to scroll to.
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Handles language change by calling `changeLanguage` method from `TranslateConfigService`.
   * @param lang The new language code (e.g., 'en' or 'de').
   */
  onLanguageChanged(lang: string) {
    this.translateConfigService.changeLanguage(lang);
  }

}
