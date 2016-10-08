import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { BugPage } from './../bug/bug';

@Component({
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public nav: NavController, public viewCtrl: ViewController) {

  }
  pushPage() {
    this.nav.push(BugPage);
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
