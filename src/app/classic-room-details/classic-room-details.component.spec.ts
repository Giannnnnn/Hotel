import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicRoomDetailsComponent } from './classic-room-details.component';

describe('ClassicRoomDetailsComponent', () => {
  let component: ClassicRoomDetailsComponent;
  let fixture: ComponentFixture<ClassicRoomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicRoomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
