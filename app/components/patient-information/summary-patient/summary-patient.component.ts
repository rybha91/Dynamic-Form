import { Component, OnInit } from '@angular/core';
import { SummaryPatientService } from '../../../summary-patient-data-service';
import { BlockHeader1CalendarElement } from '../../../block-header1-calendar-element.model'

@Component({
  selector: 'app-summary-patient',
  templateUrl: './summary-patient.component.html',
  styleUrls: ['./summary-patient.component.css']
})
export class SummaryPatientComponent implements OnInit {

  uiElements: any;
  // blockHeader1CalendarElement: BlockHeader1CalendarElement;
  blockHeader1CalendarElement: any;

  constructor(private service: SummaryPatientService) { }

  ngOnInit() {
    let data = this.service.getSummaryPatientsUiElements()
    this.uiElements = data.uiElements;
    // this.blockHeader1CalendarElement = <BlockHeader1CalendarElement>data.blockHeader1CalendarElement;
    this.blockHeader1CalendarElement = data.blockHeader1CalendarElement;
  }
}
