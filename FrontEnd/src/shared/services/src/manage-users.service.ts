import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {Response, Headers, RequestOptions} from "angular2/http";
import {UserComponent} from "../../../components/user/user.component";

/**
 * Service ManageUsersService.
 * The service contains all functions to manage users in the server. They use HTTP requests
 * to pass information from the front-end to the back-end.
 */
@Injectable()
export class ManageUsersService {

    private users;
    private _serverLink = 'http://catalogservices.eu-gb.mybluemix.net/test';//'http://catalogservices.eu-gb.mybluemix.net/project';
    private extensionLink=["/connect"];
    private _serverLinkPlots = 'http://catalogservices.eu-gb.mybluemix.net/plots';//'http://catalogservices.eu-gb.mybluemix.net/project';

    private _service= '';
    /**
     * Constructor
     * @param http
     */
    constructor(private http:Http) {}

    /**
     * Function getUsers. This function makes a get HTTP request to the server
     * @returns {Promise<*>|Promise<T>}
     */
    getUsers() {//'Access-Control-Allow-Origin: *'
        let headers = new Headers({'Content-Type': 'text/plain; application/x-www-form-urlencoded; multipart/form-data '});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this._serverLink, options)
            .toPromise()
            .then(res =>  { <UserComponent[]>res.json()[0]}) //<UserComponent[]>res.json().data) //this.extractDatathis.extractData
            .catch(this.handleError);
    }

    getPlots(){
        let headers = new Headers({'Content-Type': 'text/plain; application/x-www-form-urlencoded; multipart/form-data '});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this._serverLinkPlots, options)
            .toPromise()
            .then(res =>  { this.getPlotData(res.json());}) //<UserComponent[]>res.json().data) //this.extractDatathis.extractData
            .catch(this.handleError);
    }
    /*
    getPlotData(res : JSON){
        for(let i=0;i<res.leng
    }*/

    private extractData(res: Response) {
        console.log("data");
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        console.log("into extract data: "+ body);
        return body.data || { };
    }

    /**
     * Function addUser. This function adds a user into the database thanks to
     * a put HTTP request.
     * @param user_id
     * @returns {Promise<*>|Promise<T>}
     */
    addUser(userJSON): Promise<UserComponent>  {
        let body = JSON.stringify( userJSON );
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(this._serverLink, body, options)
            .toPromise()
            .then(res=> <UserComponent> res.json().data)
            .catch(this.handleError);
    }


    /**
     * Function updateUser. This function updates user data.
     * @param userJSON
     * @returns {Promise<UserComponent>|Promise<*>|Promise<T>}
     */
    updateUser(userJSON): Promise<UserComponent>{
        let body = JSON.stringify( userJSON );
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let path= this._serverLink;
        console.log("Path: "+ path);
        console.log("User params: " + userJSON);
        return this.http.post(path, body, options)
            .toPromise()
            .then(res=> <UserComponent> res.json())
            .catch(this.handleError);
    }

    /**
     * Function connect.
     * This function verifies information given by user with a post HTTP request.
     * @param userJSON
     * @returns {Promise<UserComponent>|Promise<*>|Promise<T>}
     */
    connect(userJSON): Promise<UserComponent>{
        let body = JSON.stringify( userJSON );
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let path= this._serverLink+this.extensionLink[0];
        return this.http.post(path, body, options)
            .toPromise()
            .then(res=> <UserComponent> res.json())
            .catch(this.handleError);
    }

    /**
     * Function handleError. This function catches potential errors which come from
     * the server while a HTTP request.
     * @param error
     * @returns {Promise<void>|Promise<T>|Promise<*>}
     */
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log("error la");
        console.error(error);
        return Promise.reject(error|| error.json().error || 'Server error');
    }
}