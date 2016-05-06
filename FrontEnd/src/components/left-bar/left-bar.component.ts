/**
 * Component LeftBarComponent
 */

import {Component} from 'angular2/core';
import {MenuComponent} from "../menu/menu.component";
import {GardenViewComponent} from "../garden-view/garden-view.component";
import {GeneralInfoComponent} from "../general-info/general-info.component";
import {VegetableInfoComponent} from "../vegetable-info/vegetable-info.component";

@Component({
    selector: 'left-bar',
    moduleId: module.id,
    templateUrl: './left-bar.component.html',
    styleUrls : ['./left-bar.component.css'],
    directives: [MenuComponent, VegetableInfoComponent, GeneralInfoComponent]
})
export class LeftBarComponent { }