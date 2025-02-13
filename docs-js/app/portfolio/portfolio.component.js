import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../directives/scroll-animate.directive';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
let PortfolioComponent = class PortfolioComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.projects = [
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
        this.techImages = {
            Angular: '../../assets/img/portfolio/A.png',
            TypeScript: '../../assets/img/portfolio/TS.png',
            HTML: '../../assets/img/portfolio/HTML.png',
            CSS: '../../assets/img/portfolio/CSS.png',
            Firebase: '../../assets/img/portfolio/FIRE.png',
            JavaScript: '../../assets/img/portfolio/JS.png'
        };
        this.hoveredImage = null;
        this.currentProjectIndex = 0;
        this.isOverlayVisible = false;
    }
    showImage(imagePath) {
        if (window.innerWidth >= 768) {
            this.hoveredImage = imagePath;
        }
    }
    showOverlay(index) {
        this.currentProjectIndex = index;
        this.isOverlayVisible = true;
        document.body.style.overflow = 'hidden';
    }
    hideImage() {
        this.hoveredImage = null;
    }
    hideOverlay() {
        this.isOverlayVisible = false;
        document.body.style.overflow = '';
    }
    goToNextProject() {
        this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    }
    get currentProject() {
        return this.projects[this.currentProjectIndex];
    }
    openGithub(url) {
        if (url) {
            window.open(url, '_blank');
        }
        else {
            console.error('GitHub URL is not available for this project.');
        }
    }
    openProject(url) {
        if (url) {
            window.open(url, '_blank');
        }
        else {
            console.error('Live URL is not available for this project.');
        }
    }
    getTechImage(technology) {
        return this.techImages[technology] || 'assets/img/icons/default.png';
    }
};
PortfolioComponent = __decorate([
    Component({
        selector: 'app-portfolio',
        standalone: true,
        imports: [ScrollAnimateDirective, CommonModule, TranslateModule],
        templateUrl: './portfolio.component.html',
        styleUrl: './portfolio.component.scss'
    })
], PortfolioComponent);
export { PortfolioComponent };
//# sourceMappingURL=portfolio.component.js.map