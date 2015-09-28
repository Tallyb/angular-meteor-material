'use strict';

angular.module('account').config(
    function ($mdIconProvider,accountsProvider) {

        accountsProvider.addProvider ('Facebook', 'icons/facebook.svg', '#3F62B4');
        accountsProvider.addProvider ('Google', 'icons/google.svg', '#DC4A38');
        accountsProvider.addProvider ('Twitter', 'icons/twitter.svg', '#27AAE2');

    });


