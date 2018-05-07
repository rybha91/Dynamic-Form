import { Component, OnInit } from '@angular/core';
import{ PatientsummaryService }from './../patient-summary-service';

@Component({
  selector: 'app-patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.css']
})
export class PatientSummaryComponent implements OnInit {
uiElements: any;



  constructor(private service: PatientsummaryService) { }

  ngOnInit() {
    this.uiElements = this.service.getPatientsummaryUiElements();
  }

}
