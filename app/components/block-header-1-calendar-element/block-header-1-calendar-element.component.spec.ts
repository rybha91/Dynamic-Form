import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHeader1CalendarElementComponent } from './block-header-1-calendar-element.component';

describe('BlockHeader1CalendarElementComponent', () => {
  let component: BlockHeader1CalendarElementComponent;
  let fixture: ComponentFixture<BlockHeader1CalendarElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockHeader1CalendarElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHeader1CalendarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
