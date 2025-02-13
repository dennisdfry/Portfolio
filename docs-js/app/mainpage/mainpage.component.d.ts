import { TranslateConfigService } from '../services/translate-config.service';
import { LegalNotizService } from '../legal-notiz.service';
export declare class MainpageComponent {
    private translateConfigService;
    legalNotizService: LegalNotizService;
    constructor(translateConfigService: TranslateConfigService, legalNotizService: LegalNotizService);
    scrollToSection(sectionId: string): void;
    onLanguageChanged(lang: string): void;
    openLegalNotiz(): void;
    closeLegalNotiz(): void;
}
