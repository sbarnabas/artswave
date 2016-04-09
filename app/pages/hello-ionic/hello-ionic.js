import {Page, Platform} from "ionic-angular";
import {FbProvider} from "../../providers/fb-provider/fb-provider";

@Page({
    templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
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

}
