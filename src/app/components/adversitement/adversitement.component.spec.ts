import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversitementComponent } from './adversitement.component';

describe('AdversitementComponent', () => {
  let component: AdversitementComponent;
  let fixture: ComponentFixture<AdversitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdversitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdversitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
