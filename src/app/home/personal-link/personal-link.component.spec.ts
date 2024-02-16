import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLinkComponent } from './personal-link.component';

describe('PersonalLinkComponent', () => {
  let component: PersonalLinkComponent;
  let fixture: ComponentFixture<PersonalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
