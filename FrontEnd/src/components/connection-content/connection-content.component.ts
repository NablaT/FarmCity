/**
 * Component ConnectionContentComponent
 */

import {Component, EventEmitter} from 'angular2/core';
import {LogInComponent} from "../log-in/log-in.component";
import {ChangePwdComponent} from "../change-pwd/change-pwd.component";
import {UserComponent} from "../user/user.component";
import {ForgotPwdComponent} from "../forgot-pwd/forgot-pwd.component";
import {HeaderComponent} from "../header/header.component";
import {ConfirmationEmailSentComponent} from "../confirmation-email-sent/confirmation-email-sent.component";
import {Output} from "angular2/core";

@Component({
    selector: 'connection-content',
    moduleId: module.id,
    templateUrl: './connection-content.component.html',
    styleUrls : ['./connection-content.component.css'],
    directives: [LogInComponent, ChangePwdComponent, ForgotPwdComponent, ConfirmationEmailSentComponent]
})

export class ConnectionContentComponent {

    public modelForChild;
    public connectionFailed;
    public errorMessage;
    public user;

    private emailAddress;
    private subjectEmail;
    private emailCopy;
    public emailContent;


    @Output() sendCurrentUser= new EventEmitter<UserComponent>();
    /**
     * Current page value contains the following variable: 1,2,3
     * Each number corresponds to a component:
     * 1 = Login Component
     * 2 = Change password Component
     * 3 = Forgot password Component
     * 4 = Confirm component
     * We use it to know which is the page to display
     * IF the current page value is 0, that means we have redirect the user to
     * the home page of the application
     */
    public currentPageValue;

    constructor(){
        this.emailAddress="mailto:ourfutureemail@gardenshare.com";
        this.subjectEmail="?subject=Garden Share";
        this.emailCopy="&cc=anotherfutureemail@gardenshare.com";
        this.emailContent=this.emailAddress+this.subjectEmail+this.emailCopy;
        this.modelForChild={errorMessage: '', errorRaised: false};
        this.connectionFailed=false;
        this.errorMessage="";
        this.currentPageValue=1;
        this.user = new UserComponent("", "", "",
            "", false, false, false, false, "","");
    }

    handleChildEvent(arg){}

    /**
     * Function updateCurrentPageValue.
     * This function update the variable currentPageValue.
     */
    updateCurrentPageValue(){
        if(this.currentPageValue==1 || this.currentPageValue==2){
            this.currentPageValue++;
        }
        else{
            this.currentPageValue=0;
        }
    }

    /**
     * Function redirectToHomePage.
     * This function redirects the user to the home page after a successful connection
     */
    redirectToHomePage(){
        console.log("this is the redirection, user id: "+this.user.userId);

        this.sendCurrentUser.emit(this.user);
        //TODO
    }

    /**
     * Function sendErrorMessage.
     * We run this function while an event from logInComponent rise. This event contains
     * an error message. So we update the front-end by confirming the connection Failed and then
     * we update the error message content.
     * @param message
     */
    sendUser(user:UserComponent){
        this.user=user;
        this.connectionFailed=false;
        if(this.user.error==="Forgot password"){
            this.currentPageValue=3;
        }
        else if(this.user.error==="Login"){
            this.currentPageValue=1;
        }
        else if(this.user.error==="Email sent"){
            this.currentPageValue=4;
        }
        else if(user.userId==-1 || this.user.error==="Given passwords are different."
            || this.user.error==="Password must contains at least 6 letters & numbers."){
            this.connectionFailed=true;
            this.errorMessage=user.error;
        }
        else if(user.generatedPwd==1){
            this.updateCurrentPageValue();
        }
        else{
            this.connectionFailed=false;
            this.redirectToHomePage();
        }
    }
}