import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  usuario:string=' '
  constructor(private navController: NavController) {}

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ' '
  }
  volver() {
    this.navController.navigateForward('/inicio');
  }
  viaje() {
    this.navController.navigateForward('/viaje-con');
  }
}
