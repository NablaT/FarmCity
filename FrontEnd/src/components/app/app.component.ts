import {Component, Redirect} from 'angular2/core';
import {MetricsComponent} from "../metrics/metrics.component";
import {PerformanceComponent} from "../performance/performance.component";
import {NewsComponent} from "../news/news.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {HomeComponent} from "../home/home.component";
import {LogInComponent} from "../log-in/log-in.component";
import {LogOutComponent} from "../log-out/log-out.component";
import {ManageUsersService} from "../../shared/services/src/manage-users.service";
import {Http} from "angular2/http";
import {HeaderComponent} from "../header/header.component";
import {AddUserComponent} from "../add-user/add-user.component";
import {UserListComponent} from "../user-list/user-list.component";
import {ConnectionContentComponent} from "../connection-content/connection-content.component";
import {UserComponent} from "../user/user.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {RentMyGardenComponent} from "../rent-my-garden/rent-my-garden.component";
import {GardenListComponent} from "../garden-list/garden-list.component";


/**
 * Component App. With @Component we define the characteristics of our component:
 * the style, the tag name, the assigned html file, directives we would like to use
*/
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        ConnectionContentComponent,
        HomeComponent,
        GardenListComponent
    ],
    providers: [ManageUsersService, ConnectionContentComponent]
})

/**
 * Routing configuration. The decorator @RouteConfig defines the path, the name and the component
 * for each route. This decorator is directly linked to the app.component.html which contains
 * the clickable links and to the tag router-outlet. The tag router-outlet will displays the
 * component according to user choices. If user clicks on Metrics, router-outlet will show the
 * component.
 */
@RouteConfig([
    {path: '/', name: 'HomePage', component: HomePageComponent},
    {path: '/home-page', name: 'HomePage', component: HomePageComponent},
    {path: '/rent-my-garden', name: 'RentMyGarden', component: RentMyGardenComponent},
    {path: '/user-list', name: 'UserList', component: UserListComponent},
    {path: '/connection-content', name: 'ConnectionContent', component: ConnectionContentComponent},
    {path: '/garden-list', name: 'GardenList', component: GardenListComponent}
])

export class AppComponent {
    public user;
    public userManager_error = false;
    /**
     * Page to show is variable which contains an integer
     * If pageToShow = 0 => HOMEPAGE
     * If pageToShow = 1 => LOGIN
     * If pageToShow = 2 => GARDEN VIEW
     * from the home page.
     */
    public pageToShow;
    public hideHome;
    public message="Doesn't work";

    constructor(private _manageUserService: ManageUsersService){
        this.pageToShow=1;
        this.user = new UserComponent("", "", "",
            "", false, false, false, false, "","");
    }

    /**
     * Function instanciateUser
     * @param user
     */
    instantiateUser(user:UserComponent){
        console.log("instatnatiate user");
        this.user=user;
        this.pageToShow=0;
        this.hideHome=1;
    }

    sendUser(user:UserComponent){
        console.log("je rentre in send user app");
        this.hideHome=0;
    }
}