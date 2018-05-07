import { QuestionBase } from './question-base';

export class LabelQuestion extends QuestionBase<string> {
  controlType = 'label';
  uiElementCssClass: string;

  constructor(options: {} = {}) {
    super(options);
    this.uiElementCssClass = options['uiElementCssClass'] || 'field';
  }
}
