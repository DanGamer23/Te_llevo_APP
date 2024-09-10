import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fin-pas',
  templateUrl: './fin-pas.page.html',
  styleUrls: ['./fin-pas.page.scss'],
})
export class FinPasPage implements OnInit {

  hora:string=' '
  punto:string=' '
  valor:string=' '
  constructor( private NavCtrl:NavController) { }

  ngOnInit() {
    this.hora=localStorage.getItem("hora") ?? ' '
    this.punto=localStorage.getItem("punto") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
  }

  fin() {
    this.NavCtrl.navigateForward('/pasajero');
  }

}
