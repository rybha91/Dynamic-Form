import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  // styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
name1: string = '';
  name2: string = '';
    
  @Output() submitDetails = new EventEmitter();
  
  details(formvalues){

    this.name1 = formvalues.name2+"\n"+this.name1;
    this.name2 = '';
    this.submitDetails.emit(formvalues);
}
  constructor() { }

  ngOnInit() {
  }
}