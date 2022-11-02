import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrolesdataComponent } from './getrolesdata.component';

describe('GetrolesdataComponent', () => {
  let component: GetrolesdataComponent;
  let fixture: ComponentFixture<GetrolesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrolesdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetrolesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
