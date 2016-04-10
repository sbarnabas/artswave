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
                         {"name":"Teresa Martinez"}, 
                         {"name":"Sandy Barnabas"}, 
                         {"name":"Rich Hill"}, 
                         {"name":"Kaleb McKelvey"}, 
                         {"name":"Stephen Pestian"}, 
                         {"name":"Melinda Hershey"}, 
                         {"name":"Mary Kate Genis"}, 
                         {"name":"Tiffany White"}
                     ];
  }
}
