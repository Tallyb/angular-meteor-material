
'use strict';
angular.module('simple-todos',[
    'angular-meteor'
    ,'ui.router'
    ,'ngMaterial'
    ,'account'
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