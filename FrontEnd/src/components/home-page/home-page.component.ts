/**
 * Component HomePageComponent
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'home-page',
    moduleId: module.id,
    templateUrl: './home-page.component.html',
    styleUrls : ['./home-page.component.css']
})
export class HomePageComponent {

    public photo:string;

    constructor(){
        this.photo="../assets/imageLocation/home.png";
    }
}