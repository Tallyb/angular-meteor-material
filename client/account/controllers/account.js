'use strict';

angular.module("account").controller("LoginCtrl", [function ($meteor, $state, accounts) {
        var vm = this;

        vm.credentials = {
            email: '',
            password: ''
        };

        vm.options = accounts.options;

        vm.error = '';

        vm.login = function (service) {
            $meteor.loginWithPassword(vm.credentials.email, vm.credentials.password).then(
                function () {
                    $state.go(vm.options.successPath);
                },
                function (err) {
                    vm.error = 'Login error - ' + err;
                }
            );
        };
    }
]);
