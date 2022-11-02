import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmajordataComponent } from './getmajordata.component';

describe('GetmajordataComponent', () => {
  let component: GetmajordataComponent;
  let fixture: ComponentFixture<GetmajordataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmajordataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetmajordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
