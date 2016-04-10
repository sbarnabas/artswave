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

    this.userProfile = {"userName": "Claude", "level" : "Legendary", "points": "20600", "interests": "Painting", "events" : "Tours!", "favoriteThing" : "Starry Night"};
  }
}
