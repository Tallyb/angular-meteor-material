angular.module ('simple-todos').directive ('navbar', function (){
    var ctrl = function ($scope, $meteor, $mdMedia){
        $scope.screenIsSmall = $mdMedia('sm');
    };
    return {
        restrict: "E",
        templateUrl: 'client/navbar/navbar.ng.html',
        controller: ctrl
    }
});
