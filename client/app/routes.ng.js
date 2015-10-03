'use strict';

angular.module('simple-todos').config(
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

    //main routes of the application

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'client/todos/todos-list.ng.html',
            controller: 'TodosListCtrl'

        })
        .state('logout', {
            url: '/logout',
            resolve: {
                "logout": ['$meteor', '$state', function($meteor, $state) {
                    return $meteor.logout().then(function(){
                        $state.go('home');
                    }, function(err){
                        console.log('logout error - ', err);
                    });
                }]
            }
        });

    $urlRouterProvider.otherwise("/");

    });

