import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinterestdataComponent } from './getinterestdata.component';

describe('GetinterestdataComponent', () => {
  let component: GetinterestdataComponent;
  let fixture: ComponentFixture<GetinterestdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetinterestdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetinterestdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
