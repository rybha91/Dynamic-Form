import { Injectable } from '@angular/core';
import { TextareaQuestion } from './question-textarea';
import { TextboxQuestion } from './question-textbox';
import { LabelQuestion } from './question-label';



@Injectable()
export class PatientsummaryService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getPatientsummaryUiElements() {

    const uiElements = {
       tableProperties: {
        tableCssClass: 'dynamic-table',
       
      },
      rows: [
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 1,
            rowIsReadOnly: true
          },
          
          cols: [
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'PCPName:',
                label: 'PCP Name:',
                value: '',
                required: false
              })
            },
                //col 2
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextboxQuestion({
                key: 'PCPName:',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        {
          rowProperties: {
            rowCssClass: '',
               rowDisplayOrder: 2,
               rowIsReadOnly: true
          },
       
          cols: [
             //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'ERCONTACT:',
                label: 'ER CONTACT:',
                value: '',
                required: false
              })
            },
                //col 2
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextboxQuestion({
                key: 'ERCONTACT:',
                label: '',
                value: '',
                required: false
              })
            }         
          ] // end cols
        },//end of row
         {
          rowProperties: {
            rowCssClass: '',
               rowDisplayOrder: 3,
               rowIsReadOnly: true
          },
       
          cols: [
             //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'PCPDetails:',
                label: 'PCP Details:',
                value: '',
                required: false
              })
            },
                //col 2
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextareaQuestion({
                key: 'PCPDetails:',
                label: '',
                value: '',
                required: false
              })
            }         
          ] // end cols
        },//end of row
     {
          rowProperties: {
            rowCssClass: '',
               rowDisplayOrder: 4,
               rowIsReadOnly: true
          },
       
          cols: [
             //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'Concern',
                label: 'Concern:',
                value: '',
                required: false
              })
            },
                //col 2
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextareaQuestion({
                key: 'Concern',
                label: '',
                value: '',
                required: false
              })
            }         
          ] // end cols
        },//end of row
        // {
        //   rowProperties: {
        //     rowCssClass: '',
        //        rowDisplayOrder: 4,
        //        rowIsReadOnly: true
        //   },
       
          // cols: [
           
          //   {
          //     colProperties: {
          //       colspan: 3,
          //       rowspan: 1,
          //       colCssClass: ''
          //     },
          //     colDisplayOrder: 2,
          //     question: new TextareaQuestion({
          //       key: 'T1',
          //       label: '',
          //       value: '',
          //       required: false
          //     })
          //   }         
          // ] // end cols
        // },//end of row
          
                 
]
    };
    

    uiElements.rows.sort((a, b) => {
      return a.rowProperties.rowDisplayOrder - b.rowProperties.rowDisplayOrder;
    });
    return uiElements;
  }
}
