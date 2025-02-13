import { TestBed } from '@angular/core/testing';
import { ContactMeComponent } from './contact-me.component';
describe('ContactMeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactMeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ContactMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-me.component.spec.js.map