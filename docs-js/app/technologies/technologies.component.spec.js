import { TestBed } from '@angular/core/testing';
import { TechnologiesComponent } from './technologies.component';
describe('TechnologiesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TechnologiesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(TechnologiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=technologies.component.spec.js.map