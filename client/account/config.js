'use strict';

angular.module('account').config(
    function ($mdIconProvider) {

        //configure social icons for registration
        $mdIconProvider
            .icon('facebook','icons/facebook.svg')
            .icon('twitter','icons/twitter.svg')
            .icon('google','icons/google.svg')


    });


