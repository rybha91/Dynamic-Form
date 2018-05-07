import { Component, OnInit } from '@angular/core';
import {PatientSearchService }from './../patient-search-service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent implements OnInit {
uiElements: any;
  constructor(private service: PatientSearchService) { }

  ngOnInit() {
    this.uiElements = this.service.getPatientsearchUiElements();
  }

}
