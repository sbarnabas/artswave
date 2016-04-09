import {Page, NavController, NavParams} from 'ionic-angular';
import {Http} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/interests/interests.html'
})
export class InterestsPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }

  constructor(nav, navParams, http) {
    this.nav = nav;
    this.http = http;

    console.log("getting the interestes");
    var interests =  this.http.get("http://localhost:3000/interests");
//    .then(function(response){ this.interests = response.data; });
    console.log("got the interests " + interests.size());
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
