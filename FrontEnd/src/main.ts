import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app/app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ManageUsersService} from "./shared/services/src/manage-users.service";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {HTTP_PROVIDERS} from 'angular2/http';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ManageUsersService,
    HTTP_PROVIDERS
]);
