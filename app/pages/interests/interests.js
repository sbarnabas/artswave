import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ProfilePage} from "../../pages/profile/profile";


@Page({
  templateUrl: 'build/pages/interests/interests.html'
})
export class InterestsPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }
  
  saveInterests() {
	  console.log("Saved your interests");
      this.nav.push(ProfilePage);
  };


  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;

    console.log("getting the interests");
    // this.http.get("http://localhost:3000/interests").map(res =>
	// res.json()).subscribe(data => {console.log("got the interests ",data);});
    this.interests = [
                     {"name":"Painting", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color47/Arts_Center.png", "colorValue" : "F7941E"}, 
                     {"name":"Theatre", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color48/Theatre.png", "colorValue" : "6CB33F"}, 
                     {"name":"Dance", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color46/Dance.png", "colorValue" : "552988"}, 
                     {"name":"Museum", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color45/Museum.png", "colorValue" : "00AEEF"}, 
                     {"name":"Music", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color47/Music.png", "colorValue" : "F7941E"}, 
                     {"name":"Culinary", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color2/Restaurant.png", "colorValue" : "EE3524"}, 
                     {"name":"Hiking", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color2/cincy_perks.png", "colorValue" : "EE3524"}, 
                     {"name":"3D Art", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color46/Retail.png", "colorValue" : "552988"}, 
                     {"name":"Sports", "imageUri":"https://artspass.theartswave.org/wp-content/themes/artspass/images/icons/color2/hot.png", "colorValue" : "EE3524"}
                 ];

  }
}
