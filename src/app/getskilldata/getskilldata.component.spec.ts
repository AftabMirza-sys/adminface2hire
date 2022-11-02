import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetskilldataComponent } from './getskilldata.component';

describe('GetskilldataComponent', () => {
  let component: GetskilldataComponent;
  let fixture: ComponentFixture<GetskilldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetskilldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetskilldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
