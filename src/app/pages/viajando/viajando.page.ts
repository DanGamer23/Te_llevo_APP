import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viajando',
  templateUrl: './viajando.page.html',
  styleUrls: ['./viajando.page.scss'],
})
export class ViajandoPage implements OnInit {

  hora:string=' '
  punto:string=' '
  valor:string=' '
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.hora=localStorage.getItem("hora") ?? ' '
    this.punto=localStorage.getItem("punto") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/fin-con'])
    },20000)
  }

}
