/**
 * Component HomeComponent
 */

import {Component} from 'angular2/core';
import {GardenViewComponent} from "../garden-view/garden-view.component";
import {LeftBarComponent} from "../left-bar/left-bar.component";

@Component({
    selector: 'home',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls : ['./home.component.css'],
    directives: [GardenViewComponent, LeftBarComponent]
})
export class HomeComponent {

    constructor(){

    }
}