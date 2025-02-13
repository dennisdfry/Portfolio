import { Component, OnInit } from '@angular/core';
import { LegalNotizService } from '../legal-notiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notiz',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './legal-notiz.component.html',
  styleUrls: ['./legal-notiz.component.scss']
})
export class LegalNotizComponent implements OnInit {

  /**
   * Flag indicating if the legal notice is visible.
   */
  isVisible = false;

  /**
   * Creates an instance of LegalNotizComponent.
   * @param legalNotizService The service for controlling the visibility of the legal notice.
   */
  constructor(private legalNotizService: LegalNotizService) {}

  /**
   * Initializes the component and subscribes to the visibility state of the legal notice.
   * Sets `isVisible` based on the value emitted by `LegalNotizService`.
   */
  ngOnInit(): void {
    this.legalNotizService.visibility$.subscribe(visible => {
      this.isVisible = visible;
    });
  }

  /**
   * Closes the legal notice by calling the `hide()` method of `LegalNotizService`.
   */
  closeDatenschutz(): void {
    this.legalNotizService.hide();
  }
}
