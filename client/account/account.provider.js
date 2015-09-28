
function Accounts (config)  {
    this.options = config;
}

angular.module ('account').provider("accounts", function () {
    var options  = {
        providers: [],
        successPath:'home',
        failurePath: '/login'
    };


    this.addProvider = function (name, icon, color) {
        options.providers.push ({name: name, icon: icon, color: color});
        return this;
    };

    this.setSuccessPath = function (path) {
        options.successPath = path;
    };

    this.setFailurePath = function (path) {
        options.failurePath = path;
    };

    this.$get = [function () {
        return new Accounts (options);
    }];
});




