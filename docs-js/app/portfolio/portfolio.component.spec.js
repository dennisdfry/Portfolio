import { TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';
describe('PortfolioComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PortfolioComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(PortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=portfolio.component.spec.js.map