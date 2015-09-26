/**
 * Created by Tallyb on 25-Sep-15.
 */

'use strict';
angular.module('simple-todos',[
    'angular-meteor'
    ,'ui.router'
    ,'ngMaterial'
]);

function onReady() {
    angular.bootstrap(document, ['simple-todos']);
}

if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
else
    angular.element(document).ready(onReady);

//Accounts.ui.config({
//    passwordSignupFields: "USERNAME_ONLY"
//});