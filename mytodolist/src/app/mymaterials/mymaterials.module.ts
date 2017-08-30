import { NgModule } from '@angular/core';

import { MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule, MdSidenavModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule
  ]
})
export class MyMaterialsModule { }
