import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
