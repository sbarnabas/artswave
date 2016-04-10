import {Modal, Page, NavController, NavParams} from 'ionic-angular';
import {AboutPage} from "../../pages/about/about";

@Page({
  templateUrl: 'build/pages/profile/profile.html'
})

export class ProfilePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  
  goToAbout() {
	  this.nav.push(AboutPage);
  }

  constructor(nav, navParams) {
    console.log("loading profile");
    this.nav = nav;

    this.userProfile = {"userName": "Rich", "level" : "Enthusiast", "points": "360", "interests": "", "events" : ""};
  }
}
