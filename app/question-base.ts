export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  uiElementCssClass: string;
  uiElementIsReadOnly: boolean;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      uiElementCssClass?: string,
      uiElementIsReadOnly?: boolean
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.uiElementCssClass = options.uiElementCssClass || '';
    this.uiElementIsReadOnly = options.uiElementIsReadOnly || false;
  }
}
