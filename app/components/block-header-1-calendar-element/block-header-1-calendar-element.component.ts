import { Component, OnInit, Input } from '@angular/core';
import { BlockHeader1CalendarElement } from '../../block-header1-calendar-element.model';
@Component({
  selector: 'app-block-header-1-calendar-element',
  templateUrl: './block-header-1-calendar-element.component.html',
  styleUrls: ['./block-header-1-calendar-element.component.css']
})
export class BlockHeader1CalendarElementComponent implements OnInit {

  @Input() element: BlockHeader1CalendarElement;
  errorMsg = '';

  constructor() { }

  ngOnInit() {
    if(this.element) {
      if(this.element.header && this.element.subElements) {
        this.errorMsg = '';
        console.log(this.element.subElements[0].navPath);
      } else {
        this.errorMsg = "Not a valid structure";
      }
    } else {
      this.errorMsg = "Please pass element property";
    }
  }

}
