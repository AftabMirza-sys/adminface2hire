import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetindustrydataComponent } from './getindustrydata.component';

describe('GetindustrydataComponent', () => {
  let component: GetindustrydataComponent;
  let fixture: ComponentFixture<GetindustrydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetindustrydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetindustrydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
