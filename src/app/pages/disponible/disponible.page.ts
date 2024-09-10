import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-disponible',
  templateUrl: './disponible.page.html',
  styleUrls: ['./disponible.page.scss'],
})
export class DisponiblePage implements OnInit {

  hora:string=' '
  punto:string=' '
  valor:string=' '
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.hora=localStorage.getItem("hora") ?? ' '
    this.punto=localStorage.getItem("punto") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
  }

  ir() {
    this.navCtrl.navigateForward('/en-camino');
  }
  noir() {
    this.navCtrl.navigateForward('/info-pas');
  }

}
