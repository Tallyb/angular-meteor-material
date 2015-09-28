angular.module('account').controller("RegisterCtrl", function ($meteor, $state, accounts) {
    var vm = this;

    vm.credentials = {
      email: '',
      password: ''
    };

    vm.error = '';

    vm.options = accounts.options;

    vm.register = function () {
      $meteor.createUser(vm.credentials).then(
        function () {
          $state.go('home');
        },
        function (err) {
          vm.error = 'Registration error - ' + err;
        }
      );
    };

    vm.loginWithProvider = function (provider) {
        alert (provider + ' register');
    }

    }
);