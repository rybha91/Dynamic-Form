import { Component }       from '@angular/core';

import { QuestionService } from './question.service';
import {} from './patient-summary/patient-summary.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uiElements: any;

  constructor(service: QuestionService) {
    this.uiElements = service.getQuestions();
  }
}
