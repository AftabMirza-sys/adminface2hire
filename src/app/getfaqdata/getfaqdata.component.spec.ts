import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfaqdataComponent } from './getfaqdata.component';

describe('GetfaqdataComponent', () => {
  let component: GetfaqdataComponent;
  let fixture: ComponentFixture<GetfaqdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfaqdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetfaqdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
