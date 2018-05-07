import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl({value: question.value || '', disabled: question.uiElementIsReadOnly}, Validators.required)
                                              : new FormControl({value: question.value || '', disabled: question.uiElementIsReadOnly});
    });
    return new FormGroup(group);
  }
}
