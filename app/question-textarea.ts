import { QuestionBase } from './question-base';

export class TextareaQuestion extends QuestionBase<string> {
  controlType = 'textarea';
  uiElementCssClass: string;
  
  constructor(options: {} = {}) {
    super(options);
    this.uiElementCssClass = options['uiElementCssClass'] || 'field';
  }
}
