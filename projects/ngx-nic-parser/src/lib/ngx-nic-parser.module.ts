import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgxNicParserComponent} from './ngx-nic-parser.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    NgxNicParserComponent
  ],
  imports: [
   CommonModule,
    ReactiveFormsModule,FormsModule
  ],
  exports: [
    NgxNicParserComponent,ReactiveFormsModule,FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxNicParserModule {
}
