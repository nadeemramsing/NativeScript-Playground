import { NgModule } from '@angular/core';

import { MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule, MdSidenavModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, MdPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTableModule,
    MdPaginatorModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTableModule,
    MdPaginatorModule
  ]
})
export class MyMaterialsModule { }
