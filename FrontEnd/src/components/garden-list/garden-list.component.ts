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

    public gardenListPublic:GardenComponent[];
    public gardenListPrivate:GardenComponent[];

    constructor(){
        let garden=new GardenComponent("Nice", "Claudette garden",50, 20, 0, true,false, "", "", "../../assets/imageLocation/start-vegetable-garden.jpg", "public");
        let garden2=new GardenComponent("Saint Raphael", "A le bon potager",60, 30, 0, true,false, "", "", "../assets/imageLocation/image4.png", "public");
        this.gardenListPublic=[garden, garden2];

        let garden3=new GardenComponent("Nice", "Le marché de claudette",50, 20, 0, true,false, "", "",  "../assets/imageLocation/image3.png", "private");
        let garden4=new GardenComponent("Saint Raphael", "A le bon potager",60, 30, 0, true,false, "", "", "../assets/imageLocation/image2.png", "private");
        this.gardenListPrivate=[garden3, garden4];
    }

    loginPage(){
        console.log("coucou");
    }
}