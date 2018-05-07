import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPatientComponent } from './summary-patient.component';

describe('SummaryPatientComponent', () => {
  let component: SummaryPatientComponent;
  let fixture: ComponentFixture<SummaryPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
