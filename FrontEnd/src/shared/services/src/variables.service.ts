/**
 * Service VariablesService
 */
import {Injectable} from 'angular2/core';

@Injectable()
export class VariablesService {

    public titleApp:string;

    constructor(){
        this.titleApp="Garden Sharing";
    }

}