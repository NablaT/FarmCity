import {Component, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {VariablesService} from "../../shared/services/src/variables.service";
import {Output} from "angular2/core";
import {UserComponent} from "../user/user.component";

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
    @Output() sendUser= new EventEmitter<UserComponent>();

    constructor(private _variablesService:VariablesService){
        this.titleApp=_variablesService.titleApp;
    }

    redirect(){
        this.sendUser.emit(new UserComponent("","","","",false,false, false,false, "gardenview"));
    }

}