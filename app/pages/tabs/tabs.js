import {Page, NavController, Platform} from "ionic-angular";

import {DiscoverPage} from "../../pages/discover/discover";
import {AllEventsPage} from "../all-events/all-events";

@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {
    constructor() {
        this.tab1 = DiscoverPage;
        this.tab2 = AllEventsPage;
        this.tab3=AllEventsPage;
    }
}