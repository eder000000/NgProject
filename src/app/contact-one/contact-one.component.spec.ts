import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOneComponent } from './contact-one.component';

describe('ContactOneComponent', () => {
  let component: ContactOneComponent;
  let fixture: ComponentFixture<ContactOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
