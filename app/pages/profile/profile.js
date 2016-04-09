import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/profile/profile.html'
})

export class ProfilePage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }
  
  saveInterests() {
	  console.log("Saved your interests");
  };


  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;

    console.log("loading profile");
    this.userProfile = {"userName": "Your user name!", "level" : "Enthusiast", "points": "360", "interests": "", "events" : ""};
  }
}
