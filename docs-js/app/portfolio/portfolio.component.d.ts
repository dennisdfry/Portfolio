import { Renderer2 } from '@angular/core';
export declare class PortfolioComponent {
    private renderer;
    projects: {
        title: string;
        description: string;
        image: string;
        technologies: string[];
        githubUrl: string;
        liveUrl: string;
    }[];
    techImages: {
        [key: string]: string;
    };
    constructor(renderer: Renderer2);
    hoveredImage: string | null;
    currentProjectIndex: number;
    isOverlayVisible: boolean;
    showImage(imagePath: string): void;
    showOverlay(index: number): void;
    hideImage(): void;
    hideOverlay(): void;
    goToNextProject(): void;
    get currentProject(): {
        title: string;
        description: string;
        image: string;
        technologies: string[];
        githubUrl: string;
        liveUrl: string;
    };
    openGithub(url: string): void;
    openProject(url: string): void;
    getTechImage(technology: string): string;
}
