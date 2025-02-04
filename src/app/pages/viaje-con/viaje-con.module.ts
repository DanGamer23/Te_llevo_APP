import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeConPageRoutingModule } from './viaje-con-routing.module';

import { ViajeConPage } from './viaje-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeConPageRoutingModule
  ],
  declarations: [ViajeConPage]
})
export class ViajeConPageModule {}
