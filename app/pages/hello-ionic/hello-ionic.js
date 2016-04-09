<<<<<<< HEAD
import {Page, NavController} from 'ionic-angular';

=======
import {Page, Platform} from "ionic-angular";
import {FbProvider} from "../../providers/fb-provider/fb-provider";
>>>>>>> origin/master

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
<<<<<<< HEAD
	  constructor(nav: NavController){
		    this.nav = nav;
		  }
	  
  goToInterests(){
	    // push another page onto the history stack
	    // causing the nav controller to animate the new page in
	    this.nav.push(InterestsPage);
	  }
=======
    static get parameters() {
        return [[Platform], [FbProvider]];
    }

    constructor(platform, fbProvider) {
        console.log(fbProvider);
        this.platform = platform;
        this.fb = fbProvider;
        this.email = '';
        this.name = '';
        this.id = '';
    };

    login() {
        //console.log(this.fb);
        this.fb.login().then(() => {
            this.fb.getCurrentUserProfile().then((profileData) => {
                this.email = profileData.email;
                this.name = profileData.name;
                this.id = profileData.id;
            });
        });
    };
>>>>>>> origin/master

}
