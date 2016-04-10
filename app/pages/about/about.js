import {Modal, Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/about/about.html'
})

export class AboutPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    console.log("loading about");
    this.nav = nav;

    this.contributors = [
                         {"name":"Teresa Martinez", "avatarImage":"teresa.jpg"}, 
                         {"name":"Sandy Barnabas", "avatarImage":"sandy.jpg"}, 
                         {"name":"Rich Hill", "avatarImage":"rich.jpg"}, 
                         {"name":"Kaleb McKelvey", "avatarImage":"kaleb.jpg"}, 
                         {"name":"Stephen Pestian", "avatarImage":"stephen.jpg"}, 
                         {"name":"Melinda Hershey", "avatarImage":"melinda.jpg"}, 
                         {"name":"Mary Kate Genis", "avatarImage":"mary_kate.jpg"}, 
                         {"name":"Tiffany White", "avatarImage":"tiffany.jpg"}
                     ];
  }
}
