import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipieListComponent } from './receipie-list.component';

describe('ReceipieListComponent', () => {
  let component: ReceipieListComponent;
  let fixture: ComponentFixture<ReceipieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceipieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceipieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
