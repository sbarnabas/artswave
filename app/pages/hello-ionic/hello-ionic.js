import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
	  constructor(nav: NavController){
		    this.nav = nav;
		  }
	  
  goToInterests(){
	    // push another page onto the history stack
	    // causing the nav controller to animate the new page in
	    this.nav.push(InterestsPage);
	  }

}
