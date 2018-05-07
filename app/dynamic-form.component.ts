import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() uiElements: any;
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    let rows = this.uiElements.rows;
    rows.map(row => {
      row.cols.map(col => {
        if(this.uiElements.tableProperties && this.uiElements.tableProperties.tableIsReadOnly && this.uiElements.tableProperties.tableIsReadOnly === true) {
          console.log("table level");
          col.question.uiElementIsReadOnly = true;
        } else if(row.rowProperties && row.rowProperties.rowIsReadOnly && row.rowProperties.rowIsReadOnly === true) {
          console.log("row level");
          col.question.uiElementIsReadOnly = true;
        } else if(col.colProperties && col.colProperties.colIsReadOnly && col.colProperties.colIsReadOnly === true) {
          console.log("col level");
          col.question.uiElementIsReadOnly = true;
        }
        this.questions.push(col.question);
      })
    })
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
