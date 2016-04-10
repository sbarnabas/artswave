import {Page, NavController, Platform} from "ionic-angular";

import {TabsPage} from "../../pages/tabs/tabs";
import {ProfilePage} from "../profile/profile";

@Page({
    templateUrl: 'build/pages/bottom-nav/bottom-nav.html'
})

export class BottomNavPage {
    constructor() {
        this.tab1 = TabsPage;
        this.tab2 = TabsPage;
        this.tab3=ProfilePage;
    }
}