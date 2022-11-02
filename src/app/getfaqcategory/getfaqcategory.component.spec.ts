import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfaqcategoryComponent } from './getfaqcategory.component';

describe('GetfaqcategoryComponent', () => {
  let component: GetfaqcategoryComponent;
  let fixture: ComponentFixture<GetfaqcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfaqcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetfaqcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
