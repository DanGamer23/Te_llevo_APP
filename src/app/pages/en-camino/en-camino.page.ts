import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-en-camino',
  templateUrl: './en-camino.page.html',
  styleUrls: ['./en-camino.page.scss'],
})
export class EnCaminoPage implements OnInit {

  hora:string=' '
  valor:string=' '
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.hora=localStorage.getItem("hora") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/fin-pas'])
    },20000)
  }

}
