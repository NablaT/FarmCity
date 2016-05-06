/**
 * Component VegetableInfoComponent
 */

import {Component, onInit} from 'angular2/core';
import {VegetableComponent} from "../vegetable/vegetable.component";

@Component({
    selector: 'vegetable-info',
    moduleId: module.id,
    templateUrl: './vegetable-info.component.html',
    styleUrls : ['./vegetable-info.component.css']
})
export class VegetableInfoComponent {

    private vegetableList: VegetableInfoComponent[];

    constructor(){
        //TODO: To remove
        let vegetable1= new VegetableComponent("Tomato", 1, 3,"Info");
        let vegetable2= new VegetableComponent("Potato", 4, 1,"Info 2");
        this.vegetableList=[vegetable1,vegetable2];
    }

    onInit(){
        this.getVegetableList();
    }

    getVegetableList(){
        //TODO: Call the database.
    }


}