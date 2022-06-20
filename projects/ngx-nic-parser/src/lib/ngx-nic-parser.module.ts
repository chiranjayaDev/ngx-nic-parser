import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgxNicParserComponent} from './ngx-nic-parser.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    NgxNicParserComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    NgxNicParserComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxNicParserModule {
}
