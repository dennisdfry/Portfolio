import { TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';
describe('MainpageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MainpageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MainpageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mainpage.component.spec.js.map