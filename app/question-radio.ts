import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<boolean> {
  controlType = 'radio';
  options: {key: string, value: string}[] = [];
  uiElementCssClass: string;

  constructor(options: {} = {}) {
    super(options);
   this.options = options['options'] || [];
   this.uiElementCssClass = options['uiElementCssClass'] || '';
  }
}
