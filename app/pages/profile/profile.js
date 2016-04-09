import {Modal, Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/profile/profile.html'
})

export class ProfilePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    console.log("loading profile");
    this.nav = nav;

    this.userProfile = {"userName": "Rich", "level" : "Enthusiast", "points": "360", "interests": "", "events" : ""};
  }
}
