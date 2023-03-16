import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectMapPageRoutingModule } from './select-map-routing.module';

import { SelectMapPage } from './select-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectMapPageRoutingModule
  ],
  declarations: [SelectMapPage]
})
export class SelectMapPageModule {}
