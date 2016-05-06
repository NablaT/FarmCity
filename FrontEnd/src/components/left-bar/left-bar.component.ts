/**
 * Component LeftBarComponent
 */

import {Component} from 'angular2/core';
import {MenuComponent} from "../menu/menu.component";

@Component({
    selector: 'left-bar',
    moduleId: module.id,
    templateUrl: './left-bar.component.html',
    styleUrls : ['./left-bar.component.css'],
    directives: [MenuComponent]
})
export class LeftBarComponent { }