import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {VariablesService} from "../../shared/services/src/variables.service";

/**
 * Component HeaderComponent
 */

@Component({
    selector: 'header',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls : ['./header.component.css'],
    directives : [
        ROUTER_DIRECTIVES
    ],
    providers:[VariablesService]
})

export class HeaderComponent {

    private titleApp:string;

    constructor(private _variablesService:VariablesService){
        this.titleApp=_variablesService.titleApp;
    }
}