import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolebyidComponent } from './rolebyid.component';

describe('RolebyidComponent', () => {
  let component: RolebyidComponent;
  let fixture: ComponentFixture<RolebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolebyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
