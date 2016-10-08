import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'bug.html'
})
export class BugPage {

  loaderShown: boolean = false;
  constructor(public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    this.loaderShown = true;
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading discretely...',
    });
    loading.present();
  }
}
