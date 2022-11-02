import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetintypeComponent } from './getintype.component';

describe('GetintypeComponent', () => {
  let component: GetintypeComponent;
  let fixture: ComponentFixture<GetintypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetintypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetintypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
