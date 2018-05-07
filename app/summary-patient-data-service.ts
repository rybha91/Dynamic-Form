import { Injectable } from '@angular/core';
// import { DropdownQuestion } from 'app/elements/question-dropdown';
// import { LabelQuestion } from 'app/elements/question-label';
// import { TextboxQuestion } from 'app/elements/question-textbox';
// import { RadioQuestion } from 'app/elements/question-radio';
// import { TextareaQuestion } from 'app/elements/question-textarea';

import { DropdownQuestion } from './question-dropdown';
import { LabelQuestion } from './question-label';
import { TextboxQuestion } from './question-textbox';
import { RadioQuestion } from './question-radio';
import { TextareaQuestion } from './question-textarea';

@Injectable()
export class SummaryPatientService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getSummaryPatientsUiElements() {
    const uiElements = {
      tableProperties: {
        tableCssClass: 'dynamic-table',
        tableIsReadOnly: true
      },
      rows: [
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 1
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: 'headerCol',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'patientInformationLabel',
                label: 'PATIENT INFORMATION',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 2
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'firstNameLabel',
                label: 'FIRST NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'firstName',
                label: 'FIRST NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'middleNameLabel',
                label: 'MIDDLE NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new TextboxQuestion({
                key: 'middleName',
                label: 'MIDDLE NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: 'lastNameLabel',
                label: 'LAST NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 6,
              },
              question: new TextboxQuestion({
                key: 'lastName',
                label: 'LAST NAME',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 3
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'dobLabel',
                label: 'DATE OF BIRTH',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'dob',
                label: 'DATE OF BIRTH',
                value: '2017-06-07',
                type: 'date',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'genderLabel',
                label: 'GENDER',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new DropdownQuestion({
                key: 'gender',
                label: 'Gender',
                value: 'male',
                required: false,
                options: [
                  { key: 'male', value: 'Male' },
                  { key: 'female', value: 'Female' },
                  { key: 'other', value: 'Other' }
                ]
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: 'recordNumberLabel',
                label: 'RECORD NUMBER',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 6,
              },
              question: new TextboxQuestion({
                key: 'recordNumber',
                label: 'RECORD NUMBER',
                value: '1',
                type: 'number',
                required: true
              })
            },

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 4
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 12,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 5
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 12,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 6
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: 'headerCol',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'contactInformationLabel',
                label: 'CONTACT INFORMATION',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 7
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'primaryPhoneLabel',
                label: 'PRIMARY PHONE NUMBER',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'primaryPhone',
                label: 'PRIMARY PHONE NUMBER',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'phoneTypeLabel',
                label: 'PHONE TYPE',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new DropdownQuestion({
                key: 'phoneType',
                label: 'PHONE TYPE',
                value: '',
                required: false,
                options: [
                  { key: 'home', value: 'Home' },
                  { key: 'cell', value: 'Cell Phone' }
                ]
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: 'emailLabel',
                label: 'EMAIL',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 6,
              },
              question: new TextboxQuestion({
                key: 'email',
                label: 'EMAIL',
                value: '',
                type: 'email',
                required: false
              })
            },

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 8
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'homePhoneLabel',
                label: 'HOME PHONE NUMBER',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'homePhone',
                label: 'HOME PHONE NUMBER',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'workPhoneLabel',
                label: 'WORK PHONE NUMBER',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new TextboxQuestion({
                key: 'workPhone',
                label: 'WORK PHONE NUMBER',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: 'extnLabel',
                label: 'EXTN',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 6,
              },
              question: new TextboxQuestion({
                key: 'extn',
                label: 'EXTN',
                value: '',
                type: 'number',
                required: false
              })
            },

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 9
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'addressLabel',
                label: 'ADDRESS',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 10,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'address',
                label: 'ADDRESS',
                value: '',
                type: 'text',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 10
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'addressLine2Label',
                label: 'ADDRESS 2',
                value: '',
                required: false
              })
            },
            //col
            {

              colProperties: {
                colspan: 10,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'addressLine2',
                label: 'ADDRESS 2',
                value: '',
                type: 'text',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 11
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'cityLabel',
                label: 'CITY',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'city',
                label: 'CITY',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'countyLabel',
                label: 'COUNTY',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new TextboxQuestion({
                key: 'county',
                label: 'COUNTY',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: 'stateLabel',
                label: 'STATE',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 6,
              },
              question: new TextboxQuestion({
                key: 'state',
                label: 'STATE',
                value: '',
                type: 'text',
                required: false
              })
            },

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 12
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'zipcodeLabel',
                label: 'ZIP CODE',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'zipcode',
                label: 'ZIP CODE',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 1,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'countryLabel',
                label: 'COUNTRY',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new TextboxQuestion({
                key: 'country',
                label: 'COUNTRY',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            },

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 13
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 12,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        // row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 14
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 12,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 15
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: 'headerCol',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'careGiverInformationLabel',
                label: 'CARE GIVER INFORMATION',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 16
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'cgFirstNameLabel',
                label: 'FIRST NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'cgFirstName',
                label: 'FIRST NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'cgMiddleNameLabel',
                label: 'MIDDLE NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new TextboxQuestion({
                key: 'cgMiddleName',
                label: 'MIDDLE NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 5,
              },
              question: new LabelQuestion({
                key: 'cgLastNameLabel',
                label: 'LAST NAME',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 6,
              },
              question: new TextboxQuestion({
                key: 'cgLastName',
                label: 'LAST NAME',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 17
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'cgPhoneLabel',
                label: 'PHONE NUMBER',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextboxQuestion({
                key: 'cgPhone',
                label: 'PHONE NUMBER',
                value: '',
                type: 'text',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'cgRelationLabel',
                label: 'RELATIONSHIP',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 2,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new DropdownQuestion({
                key: 'cgRelation',
                label: 'RELATIONSHIP',
                value: '',
                required: false,
                options: [
                  { key: 'parent', value: 'Parent' },
                  { key: 'cousin', value: 'Cousin' }
                ]
              })
            }

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 18
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 12,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 19
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 12,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 20
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 4,
                rowspan: 1,
                colCssClass: 'headerCol',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'generalInformationLabel',
                label: 'GENERAL INFORMATION',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 8,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: '',
                label: '',
                value: '',
                required: false
              })
            }
          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 21
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'sourceOfContactLabel',
                label: 'SOURCE OF CONTACT',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new DropdownQuestion({
                key: 'sourceOfContact',
                label: 'SOURCE OF CONTACT',
                value: '',
                required: false,
                options: [
                  { key: 'parent', value: 'Parent' },
                  { key: 'cousin', value: 'Cousin' }
                ]
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'appointmentTypeLabel',
                label: 'APPOINTMENT TYPE',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new DropdownQuestion({
                key: 'appointmentType',
                label: 'APPOINTMENT TYPE',
                value: '',
                required: false,
                options: [
                  { key: 'parent', value: 'Parent' },
                  { key: 'cousin', value: 'Cousin' }
                ]
              })
            }

          ] // end cols
        },
        //row
        {
          rowProperties: {
            rowCssClass: '',
            rowDisplayOrder: 22
          },
          cols: [
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 1,
              },
              question: new LabelQuestion({
                key: 'otherPractitionersLabel',
                label: 'OTHER PRACTITIONERS',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 2,
              },
              question: new TextareaQuestion({
                key: 'otherPractitioners',
                label: 'OTHER PRACTITIONERS',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 3,
              },
              question: new LabelQuestion({
                key: 'hospitalizationsLabel',
                label: 'HOSPITALIZATIONS',
                value: '',
                required: false
              })
            },
            //col
            {
              colProperties: {
                colspan: 3,
                rowspan: 1,
                colCssClass: '',
                colDisplayOrder: 4,
              },
              question: new TextareaQuestion({
                key: 'hospitalizations',
                label: 'HOSPITALIZATIONS',
                value: '',
                required: false
              })
            }

          ] // end cols
        }
      ] // end rows
    };//end of ui elements

    const blockHeader1CalendarElement = {
      header: "UPCOMING APPOINTMENTS",
      subElements: [
        {
          appointmentId: "2",
          date: "04/11/18",
          time: "10:30 AM",
          purpose: "MRI SCAN",
          status: "Pending Arrival",
          name: "Lenny",
          navPath: "/welcome"
        }
        , {
          appointmentId: "3",
          date: "04/11/18",
          time: "10:30 AM",
          purpose: "MRI SCAN ",
          status: "Pending Arrival",
          name: "Patient name",
          navPath: "/welcome"
        }
      ]
    }

    uiElements.rows.sort((a: any, b: any) => {
      return a.rowProperties.rowDisplayOrder - b.rowProperties.rowDisplayOrder;
    });
    uiElements.rows.forEach((element: any) => {
      element.cols.sort((b: any, c: any) => {
        return (b.colProperties.colDisplayOrder - c.colProperties.colDisplayOrder);
      });
    });
    const data = { 'uiElements': uiElements, 'blockHeader1CalendarElement': blockHeader1CalendarElement}
    return data;
  }



}
