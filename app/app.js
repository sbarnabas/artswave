import 'es6-shim';
import {App, IonicApp, Platform, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {InterestsPage} from './pages/interests/interests';
import {ListPage} from './pages/list/list';
import {FbProvider} from './providers/fb-provider/fb-provider';


@App({
  templateUrl: 'build/app.html',
  providers: [FbProvider],
  config: {
    mode:'ios'
  } // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
<<<<<<< HEAD
    return [[IonicApp], [Platform], [MenuController], [NavController]];
  }

  constructor(app, platform, menu, nav) {
=======
    return [[IonicApp], [Platform],[FbProvider], [MenuController]];
  }


  constructor(app, platform,fbprovider,menu) {
>>>>>>> origin/master
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();
    this.nav = nav;

    // set our app's pages
    this.pages = [
      { title: 'ArtsWave Connect', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Interests', component: InterestsPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      console.log("here");
      if (!window.cordova || window.cordova.platformId == "browser") {
        console.log("browser");
        facebookConnectPlugin.browserInit(812818618863050, version);
        // version is optional. It refers to the version of API you may want to use.
      }
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
