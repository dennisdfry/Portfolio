import { OnInit } from '@angular/core';
import { LegalNotizService } from '../legal-notiz.service';
export declare class LegalNotizComponent implements OnInit {
    private legalNotizService;
    isVisible: boolean;
    constructor(legalNotizService: LegalNotizService);
    ngOnInit(): void;
    closeDatenschutz(): void;
}
