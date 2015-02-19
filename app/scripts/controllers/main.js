'use strict';

/**
 * @ngdoc function
 * @name karaokeBarSongsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karaokeBarSongsApp
 */
angular.module('karaokeBarSongsApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
      console.log("bol expr: " + $scope.todo == true);
      if ($scope.todo) {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });
