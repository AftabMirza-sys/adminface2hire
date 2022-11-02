import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcategorydataComponent } from './getcategorydata.component';

describe('GetcategorydataComponent', () => {
  let component: GetcategorydataComponent;
  let fixture: ComponentFixture<GetcategorydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcategorydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcategorydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
