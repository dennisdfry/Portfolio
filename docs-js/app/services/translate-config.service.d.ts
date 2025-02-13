import { TranslateService } from '@ngx-translate/core';
export declare class TranslateConfigService {
    private translate;
    constructor(translate: TranslateService);
    changeLanguage(lang: string): void;
    getCurrentLanguage(): string;
}
