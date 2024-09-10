import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viaje-con',
  templateUrl: './viaje-con.page.html',
  styleUrls: ['./viaje-con.page.scss'],
})
export class ViajeConPage implements OnInit {
  hora:string=' '
  punto:string=' '
  valor:string=' '
  capacidad:string=' '

  constructor(private navCtrl:NavController,) { }

  ngOnInit() {
  }

  validarInput(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
  }

  ir() {
    localStorage.setItem("hora",this.hora)
    localStorage.setItem("punto",this.punto)
    localStorage.setItem("valor",this.valor)
    localStorage.setItem("capacidad",this.capacidad)
    this.navCtrl.navigateForward('/viajando');
  }
  noir() {
    localStorage.setItem("hora",this.hora)
    localStorage.setItem("punto",this.punto)
    localStorage.setItem("valor",this.valor)
    localStorage.setItem("capacidad",this.capacidad)
    this.navCtrl.navigateForward('/cancelado');
  }
}
