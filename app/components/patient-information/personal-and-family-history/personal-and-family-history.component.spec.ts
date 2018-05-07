import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAndFamilyHistoryComponent } from './personal-and-family-history.component';

describe('PersonalAndFamilyHistoryComponent', () => {
  let component: PersonalAndFamilyHistoryComponent;
  let fixture: ComponentFixture<PersonalAndFamilyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAndFamilyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAndFamilyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
