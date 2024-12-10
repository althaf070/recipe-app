import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReceipieComponent } from './manage-receipie.component';

describe('ManageReceipieComponent', () => {
  let component: ManageReceipieComponent;
  let fixture: ComponentFixture<ManageReceipieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageReceipieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReceipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
