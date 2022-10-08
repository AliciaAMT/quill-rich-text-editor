import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPageRoutingModule } from './display-routing.module';

import { DisplayPage } from './display.page';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPageRoutingModule,
    QuillModule,
  ],
  declarations: [DisplayPage],
})
export class DisplayPageModule {}
