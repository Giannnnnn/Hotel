import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicRoomRentComponent } from './classic-room-rent.component';

describe('ClassicRoomRentComponent', () => {
  let component: ClassicRoomRentComponent;
  let fixture: ComponentFixture<ClassicRoomRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicRoomRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicRoomRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
