import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectMapPage } from './select-map.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectMapPageRoutingModule {}
