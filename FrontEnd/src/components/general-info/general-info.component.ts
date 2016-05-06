/**
 * Component GeneralInfoComponent
 */

import {Component} from 'angular2/core';
import {InformationComponent} from "../information/information.component";

@Component({
    selector: 'general-info',
    moduleId: module.id,
    templateUrl: './general-info.component.html',
    styleUrls : ['./general-info.component.css']
})
export class GeneralInfoComponent {

    private informationList: InformationComponent[];

    constructor(){
        let information= new InformationComponent("Today","Sunny", "55%", "Too much bad plants");
        let information2= new InformationComponent("Tomorrow", "Rain", "55%", "Too much bad plants");
        this.informationList=[information, information2];
    }
}