import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { LabelQuestion } from './question-label';
import { TextboxQuestion } from './question-textbox';
import { RadioQuestion } from './question-radio';
import { TextareaQuestion } from './question-textarea';

@Injectable()
export class PersonalFamilyHistoryService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getPersonalFamilyHistoryUiElements() {
    const uiElements = {
      tableProperties: {
        tableCssClass: 'dynamic-table',
        // tableIsReadOnly: true
      },//end of table
      rows: [
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 1,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'birthProblemsLabel',
                label: 'Were there problems with your birth? (specify)',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextareaQuestion({
                key: 'birthProblems',
                label: 'Were there problems with your birth? (specify)',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 2,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'bornAndRaisedLabel',
                label: 'Where were you born & raised?',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextboxQuestion({
                key: 'bornAndRaised',
                label: 'Where were you born & raised?',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 3,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'highestEducationLabel',
                label: 'What is your highest education?',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new DropdownQuestion({
                key: 'highestEducation',
                label: 'What is your highest education?',
                value: 'highSchool',
                required: false,
                options: [
                  { key: 'highSchool', value: 'High School' },
                  { key: 'someCollege', value: 'Some College' },
                  { key: 'collegeGraduate', value: 'College Graduate' },
                  { key: 'advancedDegree', value: 'Advanced Degree' }
                ]
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 4,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'maritalStatusLabel',
                label: 'Marital Status',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new DropdownQuestion({
                key: 'maritalStatus',
                label: 'Marital Status',
                value: 'neverMarried',
                required: false,
                options: [
                  { key: 'neverMarried', value: 'Never Married' },
                  { key: 'married', value: 'Married' },
                  { key: 'divorced', value: 'Divorced' },
                  { key: 'widowed', value: 'Widowed' },
                  { key: 'partneredSignificantOther', value: 'Partnered/significant Other' },
                ]
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 5,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'occupationLabel',
                label: 'What is your current or past occupation?',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextboxQuestion({
                key: 'occupation',
                label: 'What is your current or past occupation?',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 6,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'currentlyWorkingLabel',
                label: 'Are you currently working?',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new RadioQuestion({
                key: 'currentlyWorking',
                label: 'Are you currently working?',
                value: false,
                options: [
                  { key: 'yes', value: 'Yes' },
                  { key: 'no', value: 'No' }
                ],
                required: false,
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 3,
              question: new LabelQuestion({
                key: 'hoursPerWeekLabel',
                label: 'Hours/week',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 4,
              question: new TextboxQuestion({
                key: 'hoursPerWeek',
                label: 'Hours/week',
                value: '',
                type: 'number',
                required: false,
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 6,
              question: new LabelQuestion({
                key: 'notCurrentlyWorkingLabel',
                label: 'If not, are you',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 7,
              question: new DropdownQuestion({
                key: 'notCurrentlyWorking',
                label: 'If not, are you',
                value: 'retired',
                required: false,
                options: [
                  { key: 'retired', value: 'Retired' },
                  { key: 'disabled', value: 'Disabled' },
                  { key: 'sickLeave', value: 'Sick Leave?' }
                ]
              })
            },
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 7,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'disabilitySSILabel',
                label: 'Do you receive diability or SSI?',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new RadioQuestion({
                key: 'disabilitySSI',
                label: 'Do you receive diability or SSI?',
                value: false,
                options: [
                  { key: 'yes', value: 'Yes' },
                  { key: 'no', value: 'No' }
                ],
                required: false,
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 3,
              question: new LabelQuestion({
                key: 'religionLabel',
                label: 'If yes, for what & how long?',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 4,
              question: new TextboxQuestion({
                key: 'religion',
                label: 'Religion',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 8,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'legalProblemsLabel',
                label: 'Have you ever had legal problems? (specify)',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextareaQuestion({
                key: 'legalProblems',
                label: 'Have you ever had legal problems? (specify)',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 9,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'religionLabel',
                label: 'Religion',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextboxQuestion({
                key: 'religion',
                label: 'Religion',
                value: '',
                required: false
              })
            }
          ] // end cols
        }//end of row
      ]
    };//end of ui elements

    uiElements.rows.sort((a, b) => {
      return a.rowDisplayOrder - b.rowDisplayOrder;
    });
    uiElements.rows.map(a => {
      a.cols.sort((b, c) => b.colDisplayOrder - c.colDisplayOrder);
    })
    return uiElements;
  }

  getPersonalFamilyHistoryUiElements1() {
    const uiElements1 = {
      tableProperties: {
        tableCssClass: 'dynamic-table',
        // tableIsReadOnly: true
      },//end of table
      rows: [
        //row
        {
          rowProperties: {
            rowCssClass: '',
            // rowIsReadOnly: ''
          },
          rowDisplayOrder: 1,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: '',
                // colIsReadOnly: true
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'maternalRelativesLabel',
                label: 'Maternal Relatives',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: '',
                colIsReadOnly: false
              },
              colDisplayOrder: 2,
              question: new TextareaQuestion({
                key: 'maternalRelatives',
                label: 'Maternal Relatives',
                value: '',
                required: false,
                uiElementIsReadOnly: false
              })
            }
          ] // end cols
        },//end of row
        //row
        {
          rowProperties: {
            rowCssClass: ''
          },
          rowDisplayOrder: 2,
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 1,
              question: new LabelQuestion({
                key: 'paternalRelativesLabel',
                label: 'Paternal Relatives',
                value: '',
                required: false
              })
            },//col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: ''
              },
              colDisplayOrder: 2,
              question: new TextareaQuestion({
                key: 'paternalRelatives',
                label: 'Paternal Relatives',
                value: '',
                required: false
              })
            }
          ] // end cols
        },//end of row
        
      ]
    };//end of ui elements

    uiElements1.rows.sort((a, b) => {
      return a.rowDisplayOrder - b.rowDisplayOrder;
    });
    uiElements1.rows.forEach((element: any) => {
      element.cols.sort((b: any, c: any) => {
        return (b.colProperties.colDisplayOrder - c.colProperties.colDisplayOrder);
      });
    });
    return uiElements1;
  }



}
