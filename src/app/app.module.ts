import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';
import { BugPage } from '../pages/bug/bug';

var config = {
  statusbarPadding: true
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalPage,
    BugPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalPage,
    BugPage
  ],
  providers: []
})
export class AppModule {}
