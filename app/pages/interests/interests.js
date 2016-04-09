import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/interests/interests.html'
})
export class InterestsPage {
	  constructor(nav: NavController){
		    this.nav = nav;
		    
		    // pull the list of interests from the API endpoint
		    
		    // iterate through the list of of interests and add response to them
		  }
}
