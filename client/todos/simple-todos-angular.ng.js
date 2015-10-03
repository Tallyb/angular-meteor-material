

  angular.module('simple-todos').controller('TodosListCtrl', function ($scope, $meteor, $mdMedia) {

      $scope.$meteorSubscribe('tasks');

      $scope.query = {};

      $scope.tasks = $meteor.collection(function() {
        return Tasks.find($scope.getReactively('query'), {sort: {createdAt: -1}})
      });

      $scope.addTask = function (newTask) {
        $meteor.call('addTask', newTask);
      };

      $scope.deleteTask = function (task) {
        $meteor.call('deleteTask', task._id);
      };

      $scope.setChecked = function (task) {
        $meteor.call('setChecked', task._id, task.checked);
      };

      $scope.setPrivate = function (task) {
        $meteor.call('setPrivate', task._id, task.private);
      };

      $scope.hideTasks = function (hideCompleted) {
          if (hideCompleted)
              $scope.query = {checked: {$ne: true}};
          else
              $scope.query = {};
      };

      //$scope.$watch('hideCompleted', function() {
      //  if ($scope.hideCompleted)
      //    $scope.query = {checked: {$ne: true}};
      //  else
      //    $scope.query = {};
      //});

      $scope.incompleteCount = function () {
        return Tasks.find({ checked: {$ne: true} }).count();
      };

      $scope.screenIsSmall = $mdMedia('sm');

    });




