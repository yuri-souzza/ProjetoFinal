import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PortifolioPageRoutingModule } from './portifolio-routing.module';
import { PortifolioPage } from './portifolio.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortifolioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PortifolioPage]
})
export class PortifolioPageModule {}
