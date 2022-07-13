import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { NgxNicParserComponent } from './ngx-nic-parser.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule, FormsModule
    ],
  declarations: [NgxNicParserComponent],
  exports: [NgxNicParserComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxNicParserModule { }
