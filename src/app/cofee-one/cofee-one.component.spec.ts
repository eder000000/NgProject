import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeOneComponent } from './cofee-one.component';

describe('CofeeOneComponent', () => {
  let component: CofeeOneComponent;
  let fixture: ComponentFixture<CofeeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofeeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
