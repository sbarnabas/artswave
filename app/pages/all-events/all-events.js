import {Page, NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";
import {AllEventsPage} from "../all-events/all-events";

@Page({
    templateUrl: 'build/pages/all-events/all-events.html'
})
export class ListPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;
    }

    /*itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            item: item
        });
    }*/
}
