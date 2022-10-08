import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { QuillModule } from 'ngx-quill';
import { DisplayPageModule } from '../display/display.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    QuillModule,
    DisplayPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
