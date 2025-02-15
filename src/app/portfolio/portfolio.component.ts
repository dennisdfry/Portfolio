import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { CommonModule } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ScrollAnimateDirective, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  /**
   * Array of project objects containing title, description, image, technologies, and URLs.
   */
  projects = [
    {
      title: 'Join',
      description: 'Dieses Projekt wurde mit Angular, TypeScript, HTML, CSS und Firebase erstellt. Es zeigt, wie man kollaborative Tools entwickelt.',
      image: '../../assets/img/portfolio/JOIN (1).png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/dennisdfry/Join',
      liveUrl: 'http://join.dennis-freyer.de/public/index.html'
    },
    {
      title: 'El Pollo Loco',
      description: 'Ein lustiges Spiel, das mit HTML, CSS und JavaScript entwickelt wurde. Es demonstriert Animationen und Spielelogik.',
      image: '../../assets/img/portfolio/EL-POLLO-LOCO.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/dennisdfry/El-Pollo-Lco',
      liveUrl: 'http://el-pollo-loco.dennis-freyer.de/index.html'
    },
    {
      title: 'Da Bubble',
      description: 'Dieses Projekt wurde mit Angular, Firebase und TypeScript erstellt. Es zeigt meine Fähigkeit, skalierbare Anwendungen zu entwickeln.',
      image: '../../assets/img/portfolio/DABUBBLE.png',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com/your-repo',
      liveUrl: 'https://your-live-project-url.com'
    }
  ];

  /**
   * Mapping of technology names to their respective icon images.
   */
  techImages: { [key: string]: string } = {
    Angular: '../../assets/img/portfolio/A.png',
    TypeScript: '../../assets/img/portfolio/TS.png',
    HTML: '../../assets/img/portfolio/HTML.png',
    CSS: '../../assets/img/portfolio/CSS.png',
    Firebase: '../../assets/img/portfolio/FIRE.png',
    JavaScript: '../../assets/img/portfolio/JS.png'
  };

  /**
   * Stores the currently hovered image path.
   */
  hoveredImage: string | null = null;

  /**
   * Index of the currently selected project in the overlay.
   */
  currentProjectIndex: number = 0;

  /**
   * Determines whether the project overlay is visible.
   */
  isOverlayVisible: boolean = false;

  /**
   * Constructor initializes the renderer for DOM manipulation.
   * @param renderer The Angular Renderer2 for modifying DOM properties.
   */
  constructor(private renderer: Renderer2) { }

  /**
   * Shows an image preview on hover for screens wider than 768px.
   * @param imagePath The path to the image to be displayed.
   */
  showImage(imagePath: string): void {
    if (window.innerWidth >= 768) {
      this.hoveredImage = imagePath;
    }
  }

  /**
   * Displays the project details overlay.
   * @param index The index of the selected project.
   */
  showOverlay(index: number): void {
    this.currentProjectIndex = index;
    this.isOverlayVisible = true;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Hides the hovered image preview.
   */
  hideImage(): void {
    this.hoveredImage = null;
  }

  /**
   * Hides the project details overlay and restores scrolling.
   */
  hideOverlay(): void {
    this.isOverlayVisible = false;
    document.body.style.overflow = '';
  }

  /**
   * Moves to the next project in the list.
   */
  goToNextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  /**
   * Returns the currently selected project.
   */
  get currentProject() {
    return this.projects[this.currentProjectIndex];
  }

  /**
   * Opens the GitHub repository for the selected project in a new tab.
   * @param url The GitHub repository URL.
   */
  openGithub(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('GitHub URL is not available for this project.');
    }
  }

  /**
   * Opens the live project URL in a new tab.
   * @param url The live project URL.
   */
  openProject(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('Live URL is not available for this project.');
    }
  }

  /**
   * Retrieves the corresponding technology image for a given technology name.
   * @param technology The name of the technology.
   * @returns The path to the technology's image.
   */
  getTechImage(technology: string): string {
    return this.techImages[technology] || 'assets/img/icons/default.png';
  }
}