import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../question.service';

@Component({
  selector: 'app-personal-and-family-history',
  templateUrl: './personal-and-family-history.component.html',
  styleUrls: ['./personal-and-family-history.component.css']
})
export class PersonalAndFamilyHistoryComponent implements OnInit {

  uiElements: any;

  constructor(private service: QuestionService) { }

  ngOnInit() {
    this.uiElements = this.service.getPersonalandFamilyHistoryQuestions();
  }

}
