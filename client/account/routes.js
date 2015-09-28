
'use strict';

angular.module('account').config(
    function ( $stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'client/account/views/login.ng.html',
                controller: 'LoginCtrl',
                controllerAs: 'lc'
            })
            .state('register',{
                url: '/register',
                templateUrl: 'client/account/views/register.ng.html',
                controller: 'RegisterCtrl',
                controllerAs: 'rc'
            })
            .state('resetPassword', {
                url: '/resetPassword',
                templateUrl: 'client/account/views/reset-password.ng.html',
                controller: 'ResetCtrl',
                controllerAs: 'rpc'
            })


    });

