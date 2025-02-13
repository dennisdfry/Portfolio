import { TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
describe('AboutMeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutMeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=about-me.component.spec.js.map