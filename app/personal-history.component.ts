import { Component, OnInit } from '@angular/core';
import { PersonalFamilyHistoryService } from './personal-family-history-service';

@Component({
  selector: 'app-personal-history',
  templateUrl: './personal-history.component.html',
  // styleUrls: ['./personal-history.component.css']
})
export class PersonalHistoryComponent implements OnInit {

uiElements: any;
uiElements1: any;


  constructor(private service: PersonalFamilyHistoryService) { }

  ngOnInit() {
    this.uiElements = this.service.getPersonalFamilyHistoryUiElements();
    this.uiElements1 = this.service.getPersonalFamilyHistoryUiElements1();
  }

}
