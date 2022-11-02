import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqcategoryComponent } from './faqcategory.component';

describe('FaqcategoryComponent', () => {
  let component: FaqcategoryComponent;
  let fixture: ComponentFixture<FaqcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
