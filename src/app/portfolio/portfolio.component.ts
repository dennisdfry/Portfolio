import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ScrollAnimateDirective, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  hoveredImage: string | null = null;
  currentProjectIndex: number = 0;
  isOverlayVisible: boolean = false;

  showImage(imagePath: string): void {
    this.hoveredImage = imagePath;
  }

  showOverlay(index: number): void {
    this.currentProjectIndex = index;
    this.isOverlayVisible = true;
  }

  hideImage(): void {
    this.hoveredImage = null;
  }

  hideOverlay(): void {
    this.isOverlayVisible = false;
  }

  goToNextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  get currentProject() {
    return this.projects[this.currentProjectIndex];
  }

  openGithub(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('GitHub URL is not available for this project.');
    }
  }

  openProject(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('Live URL is not available for this project.');
    }
  }

  projects = [
    {
      title: 'Join',
      description: 'Dieses Projekt wurde mit Angular, TypeScript, HTML, CSS und Firebase erstellt. Es zeigt, wie man kollaborative Tools entwickelt.',
      image: '../../assets/img/portfolio/JOIN (1).png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/dennisdfry/Join',
      liveUrl: 'https://your-live-project-url.com'
    },
    {
      title: 'El Pollo Loco',
      description: 'Ein lustiges Spiel, das mit HTML, CSS und JavaScript entwickelt wurde. Es demonstriert Animationen und Spielelogik.',
      image: '../../assets/img/portfolio/EL-POLLO-LOCO.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/dennisdfry/El-Pollo-Lco',
      liveUrl: 'https://your-live-project-url.com'
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


  getTechImage(technology: string): string {
    return this.techImages[technology] || 'assets/img/icons/default.png';
  }

  techImages: { [key: string]: string } = {
    Angular: '../../assets/img/portfolio/A.png',
    TypeScript: '../../assets/img/portfolio/TS.png',
    HTML: '../../assets/img/portfolio/HTML.png',
    CSS: '../../assets/img/portfolio/CSS.png',
    Firebase: '../../assets/img/portfolio/FIRE.png',
    JavaScript: '../../assets/img/portfolio/JS.png'
  };
}
