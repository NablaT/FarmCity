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
       public location:string,
       public name:string,
       public price:number,
       public size:number,
       public pieces:number,
       public yesSensors:boolean,
       public noSensors:boolean,
       public cityzone?:string,
       public tools?:string,
       public photo?:string,
       public type?:string
    ){}
}