import {Page, NavController, NavParams} from "ionic-angular";
import {ItemDetailsPage} from "../item-details/item-details";

@Page({
    templateUrl: 'build/pages/discover/discover.html'
})
export class DiscoverPage {
    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
        this.nav = nav;

        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.items = [];
        this.getData();
        if (this.data.events && this.data.events.event) {
            try {
                for (var idx in this.data.events.event) {
                    var d = this.data.events.event[idx]
                    this.items.push({
                        title: d.eventName ? d.eventName : "(Untitled)",
                        image: d.eventImage ? d.eventImage : "",
                        note:  d.eventDescription ? d.eventDescription : "None"
                    });
                }

            } catch (ex) {
                console.log(ex);
            }
        }
    }

    itemRemove(event, item) {
        var idx = this.items.indexOf(item);
        if (idx > -1) {
            this.items.splice(idx, 1);
        }
    }

    itemTapped(event, item) {
        this.nav.push(ItemDetailsPage, {
            item: item
        });
    }
}
