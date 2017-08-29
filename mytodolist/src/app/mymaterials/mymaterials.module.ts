import { NgModule } from '@angular/core';

import { MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule, MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule
  ]
})
export class MyMaterialsModule { }
