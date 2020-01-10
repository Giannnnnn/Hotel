import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeRoomRentComponent } from './deluxe-room-rent.component';

describe('DeluxeRoomRentComponent', () => {
  let component: DeluxeRoomRentComponent;
  let fixture: ComponentFixture<DeluxeRoomRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeluxeRoomRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluxeRoomRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
