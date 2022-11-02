import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdegreedataComponent } from './getdegreedata.component';

describe('GetdegreedataComponent', () => {
  let component: GetdegreedataComponent;
  let fixture: ComponentFixture<GetdegreedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdegreedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdegreedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
