/**
 * Component GardenListComponent
 */

import {Component} from 'angular2/core';
import {GardenComponent} from "../garden/garden.component";

@Component({
    selector: 'garden-list',
    moduleId: module.id,
    templateUrl: './garden-list.component.html',
    styleUrls : ['./garden-list.component.css']
})
export class GardenListComponent {

    public gardenList:GardenComponent[];

    constructor(){

    }
}