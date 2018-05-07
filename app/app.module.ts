import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import {QuestionService} from './question.service';
import { GeneralInformationComponent } from './components/patient-information/general-information/general-information.component';
import { SummaryPatientComponent } from './components/patient-information/summary-patient/summary-patient.component';
import { PersonalAndFamilyHistoryComponent } from './components/patient-information/personal-and-family-history/personal-and-family-history.component';
import { BlockHeader1CalendarElementComponent} from './components/block-header-1-calendar-element/block-header-1-calendar-element.component';
import { PersonalHistoryComponent } from './personal-history.component';
import { PersonalFamilyHistoryService } from './personal-family-history-service';
import { SummaryPatientService } from './summary-patient-data-service';
import{ PatientsummaryService }from './patient-summary-service';
import {PatientSearchService }from './patient-search-service';
import { PatientSummaryComponent } from './patient-summary/patient-summary.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ NotesComponent, PatientSummaryComponent, AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, GeneralInformationComponent, PersonalAndFamilyHistoryComponent, PersonalHistoryComponent, SummaryPatientComponent, BlockHeader1CalendarElementComponent],
  bootstrap: [ AppComponent ],
  providers: [QuestionService, PersonalFamilyHistoryService, SummaryPatientService, PatientsummaryService,PatientSearchService ],

})
export class AppModule {
  constructor() {
  }
}
