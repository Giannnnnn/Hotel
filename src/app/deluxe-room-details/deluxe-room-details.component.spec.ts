import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeRoomDetailsComponent } from './deluxe-room-details.component';

describe('DeluxeRoomDetailsComponent', () => {
  let component: DeluxeRoomDetailsComponent;
  let fixture: ComponentFixture<DeluxeRoomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeluxeRoomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluxeRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
