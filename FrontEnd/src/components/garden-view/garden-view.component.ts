/**
 * Component GardenViewComponent
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'garden-view',
    moduleId: module.id,
    templateUrl: './garden-view.component.html',
    styleUrls : ['./garden-view.component.css']
})
export class GardenViewComponent {


    getInfo(){
        console.log("coucou");
    }
}