'use strict';

/**
 * @ngdoc function
 * @name MyJobsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MyJobsApp
 */
angular.module('MyJobsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
