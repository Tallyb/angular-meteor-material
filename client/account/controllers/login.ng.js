angular.module("account").controller("LoginCtrl", function ($meteor, $state,$mdToast, accounts) {
    var vm = this;

    vm.credentials = {
      email: '',
      password: ''
    };

    vm.error = '';

    vm.options = accounts.options;

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

        vm.loginWithProvider = function (provider) {
            $meteor["loginWith" + provider].call ({}).then (
                function (response) {
                    console.log (response);
                },
                function (err) {
                    vm.error=err.message;
                }

            );
        };

  }
);