'use strict';

/**
 * @ngdoc overview
 * @name MyJobsApp
 * @description
 * # MyJobsApp
 *
 * Main module of the application.
 */
angular
  .module('MyJobsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/explorer', {
        templateUrl: 'views/explorer.html',
        controller: 'ExplorerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
