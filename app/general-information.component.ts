import { Component, OnInit } from '@angular/core';
import { GeneralInformationService } from './general-information.service';


@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  uiElements: any;

  constructor(private service: GeneralInformationService) { }

  ngOnInit() {
    this.uiElements = this.service.getGeneralInformationUiElements();
  }

}
