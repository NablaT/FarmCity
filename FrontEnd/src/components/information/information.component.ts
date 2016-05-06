/**
 * Component InformationComponent
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'information',
    moduleId: module.id,
    templateUrl: './information.component.html',
    styleUrls : ['./information.component.css']
})
export class InformationComponent {

    constructor(
        public title?:string,
        public meteo?:string,
        public water?:string,
        public general?:string
    ){}
}