/**
 * Component GardenComponent
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'garden',
    moduleId: module.id,
    templateUrl: './garden.component.html',
    styleUrls : ['./garden.component.css']
})
export class GardenComponent {

    constructor(
       private location:string,
       private name:string,
       private price:number,
       private size:number,
       private pieces:number,
       private cityzone?:string,
       private tools?:string,
       private photo?:string
    ){}
}