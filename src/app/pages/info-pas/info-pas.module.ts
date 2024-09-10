import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPasPageRoutingModule } from './info-pas-routing.module';

import { InfoPasPage } from './info-pas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPasPageRoutingModule
  ],
  declarations: [InfoPasPage]
})
export class InfoPasPageModule {}
