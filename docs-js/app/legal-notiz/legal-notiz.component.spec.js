import { TestBed } from '@angular/core/testing';
import { LegalNotizComponent } from './legal-notiz.component';
describe('LegalNotizComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LegalNotizComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LegalNotizComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=legal-notiz.component.spec.js.map