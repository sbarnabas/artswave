import {Page,NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/interests/interests.html'
})
export class InterestsPage {
	static get parameters() {
		return [[NavController]];
	}
	  constructor(nav){
		    this.nav = nav;
		    
		    // pull the list of interests from the API endpoint
		    
		    // iterate through the list of of interests and add response to them
		  }
}
