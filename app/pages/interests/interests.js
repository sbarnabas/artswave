import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/interests/interests.html'
})
export class InterestsPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }
  
  saveInterests() {
	  console.log("Saved your interests");
  };


  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;

    console.log("getting the interests");
//   this.http.get("http://localhost:3000/interests").map(res => res.json()).subscribe(data => {console.log("got the interests ",data);});
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
//    .then(function(response){ this.interests = response.data; });

/*
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
  }

*/
  }
}
