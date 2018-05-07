import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../question.service';
@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  uiElements: any;

  constructor(private service: QuestionService) { }

  ngOnInit() {
    this.uiElements = this.service.getQuestions();
  }

}
