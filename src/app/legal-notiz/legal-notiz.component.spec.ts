import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNotizComponent } from './legal-notiz.component';

describe('LegalNotizComponent', () => {
  let component: LegalNotizComponent;
  let fixture: ComponentFixture<LegalNotizComponent>;

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
