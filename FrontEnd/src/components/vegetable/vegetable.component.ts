/**
 * Component VegetableComponent
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'vegetable',
    moduleId: module.id,
    templateUrl: './vegetable.component.html',
    styleUrls : ['./vegetable.component.css']
})
export class VegetableComponent {

    constructor(
        public name:string,
        public growingLvl:number,
        public waterLvl:number,
        public info:string
    ){}
}