import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLinkComponent } from './professional-link.component';

describe('ProfessionalLinkComponent', () => {
  let component: ProfessionalLinkComponent;
  let fixture: ComponentFixture<ProfessionalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
