import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit() {
    this.setFavicon('assets/img/favicon.png');
  }
  
  setFavicon(url: string) {
    // Entferne das vorhandene Favicon
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }

    // Erstelle ein neues Favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = url;

    // Füge das neue Favicon dem <head> hinzu
    document.head.appendChild(favicon);
  }
}
