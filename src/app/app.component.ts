import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

/**
 * The main component of the Angular application.
 * This component is the entry point of the application and manages the favicon.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Here, the favicon is set.
   */
  ngOnInit() {
    this.setFavicon('assets/img/favicon.png');
  }

  /**
   * Dynamically sets the favicon of the application.
   * 
   * @param {string} url - The path to the favicon image. This path should be relative to the `assets` folder.
   * Example: 'assets/img/favicon.png'.
   * 
   * @example
   * // Sets the favicon to 'assets/img/favicon.png'
   * this.setFavicon('assets/img/favicon.png');
   */
  setFavicon(url: string) {
    // Removes the existing favicon if it exists
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }

    // Creates a new <link> element for the favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon'; // Defines the relationship as a favicon
    favicon.type = 'image/png'; // Sets the MIME type of the favicon
    favicon.href = url; // Sets the path to the favicon

    // Adds the new favicon to the <head> section of the document
    document.head.appendChild(favicon);
  }
}