import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-pas',
  templateUrl: './info-pas.page.html',
  styleUrls: ['./info-pas.page.scss'],
})
export class InfoPasPage implements OnInit {

  hora:string=' '
  constructor(private navCtrl:NavController,) { }

  ngOnInit() {
  }

  validarInput(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
  }

  ir() {
    localStorage.setItem("hora",this.hora)
    this.navCtrl.navigateForward('/disponible');
  }
  noir() {
    localStorage.setItem("hora",this.hora)
    this.navCtrl.navigateForward('/pasajero');
  }
}
