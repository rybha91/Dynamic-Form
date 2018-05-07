import { Injectable } from '@angular/core';
import { TextareaQuestion } from './question-textarea';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { RadioQuestion } from './question-radio';
import { LabelQuestion } from './question-label';



@Injectable()
export class PatientSearchService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getPatientsearchUiElements() {

    const uiElements = {
       tableProperties: {
        tableCssClass: 'dynamic-table'
      },
      rows: [
        
        // 1st row
                {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 1
          },
          
          cols: [
           
            //col 1
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 1  
            },
              
              question: new LabelQuestion({
                key: 'sitename',
                label: 'Site Name',
                value: '',
                required: false
              })
            },
            //col 2
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 2  
            },
              
              question: new DropdownQuestion({
                key: 'sitename',
                label: 'Site Name',
                value: '',
                required: false,
                 options: [
                  { key: 'Studyname1', value: 'Studyname1' },
                  { key: 'Studyname2', value: 'Studyname2' },
                  { key: 'Studyname3', value: 'Studyname3' }
                ]
              })
            },
             //col empty
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 3  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
            
           // col 3
                 {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 4  
          },

              question: new LabelQuestion({
                key: 'studyname',
                label: 'Study Name',
                value: '',
                required: false
              })
            },
            // col 

            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 5  
            },
              
              question: new DropdownQuestion({
                key: 'studyname',
                label: 'Study Name',
                value: '',
                required: false,
              options: [
                  { key: 'Visit name1', value: 'Visit name1' },
                  { key: 'Visit name2', value: 'Visit name2' },
                  { key: 'Visit name3', value: 'Visit name3' }
                ]
              })
            },
              //col empty
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 6  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
           // col 5

           {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 7  
          },
          
              
              question: new LabelQuestion({
                key: 'visitname',
                label: 'Visit name',
                value: '',
                required: false
              })
            },
            
           //col 6
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 8  
            },
              
              question: new DropdownQuestion({
                key: 'visitname',
                label: 'Visit name',
                value: '',
                required: false,
                type: 'date',
                options: [
                  { key: 'Site name1', value: 'Site name1' },
                  { key: 'Site name2', value: 'Site name2' },
                  { key: 'Site name3', value: 'Site name3' }
                ]
              })
            },
             //col empty
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 9  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
            
          ]
        },

        // //2nd row
  
                {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 2
          },
          
          cols: [
               //col 1
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 1  
            },
              
              question: new LabelQuestion({
                key: 'FirstName',
                label: 'First Name',
                value: '',
                required: false
              })
            },
            //col 2
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 2  
            },
              
              question: new TextboxQuestion({
                key: 'FirstName',
                label: 'First Name',
                value: '',
                required: false
              })
            },
           // end col
           //col empty
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 3  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
            //col 3
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 4  
            },
              
              question: new LabelQuestion({
                key: 'LastName',
                label: 'Last Name',
                value: '',
                required: false
              })
            },
            //col 4
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 5  
            },
              
              question: new TextboxQuestion({
                key: 'LastName',
                label: 'LastName',
                value: '',
                required: false
              })
            },
            //col empty
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 6  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
           // col 5
                 {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 7  
          },
          //col
              
              question: new LabelQuestion({
                key: 'DOB',
                label: 'DOB',
                value: '',
                required: false
              })
            },
            // col 6

            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 8  
            },
              
              question: new TextboxQuestion({
                key: 'DOB',
                label: 'DOB',
                value: '',
                required: false,
              type: 'date'
              })
            },
            //col empty
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 6  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
        
            
          ]
        },
  
        //3rd row
                 {
           rowProperties: {
             rowCssClass: '',
             rowDisplayOrder: 3
           },
          
           cols: [
  {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 1  
          },
          
              
              question: new LabelQuestion({
                key: 'ContactDetails',
                label: 'Contact Details',
                value: '',
                required: false
              })
            },
            
           //col 3
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 11  
            },
              
              question: new TextboxQuestion({
                key: 'ContactDetails',
                label: 'Contact Details',
                value: '',
                required: false,
                
              })
            },
             {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 6  
            },
              
              question: new LabelQuestion({
                key: '',
                label: '     ',
                value: '',
                required: false,
                
              })
            },
              {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 6  
            },
              
              question: new LabelQuestion({
                key: 'Contacttype',
                label: 'Contact Type',
                value: '',
                required: false,
                
              })
            },
             {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
            colDisplayOrder: 12 
          },    
              question: new DropdownQuestion({
                key: 'Contacttype',
                label: 'Contact Type',
                value: '',
                required: false,
                 options: [
                  { key: 'cell', value: 'cell' },
                  { key: 'work', value: 'work' },
                  { key: 'home', value: 'home' }
                ]
                
              })
            },            
           ]
         },
]
    };

    uiElements.rows.sort((a : any, b: any) => {
      return a.rowProperties.rowDisplayOrder - b.rowProperties.rowDisplayOrder;
    });
    return uiElements;
  }
}
