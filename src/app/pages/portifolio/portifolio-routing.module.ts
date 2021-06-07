import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortifolioPage } from './portifolio.page';

const routes: Routes = [
  {
    path: '',
    component: PortifolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortifolioPageRoutingModule {}
