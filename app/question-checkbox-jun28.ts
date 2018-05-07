import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
  controlType = 'checkbox';
  // uiElementCssClass: string;

  constructor(options: {} = {}) {
    super(options);
    this.uiElementCssClass = options['uiElementCssClass'] || '';
  }
}
