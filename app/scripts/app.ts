/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

'use strict';

angular.module('angulartsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('layout', {
        abstract: true,
        views: {
          '': {
            templateUrl: 'views/layout.html'
          },
          'nav@layout': {
            templateUrl: 'views/nav.html'
          }
        }


      })
      .state('layout.main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('layout.system', {
        url: '/system',
        templateUrl: 'views/system.html',
        controller: 'SystemCtrl',
        controllerAs: 'system'
      })
      .state('layout.parameter', {
        templateUrl: 'views/parameter.html',
        controller: 'ParameterCtrl',
        controllerAs: 'parameter'
      })
      .state('layout.instance', {
        templateUrl: 'views/instance.html',
        controller: 'InstanceCtrl',
        controllerAs: 'instance'
      })
      .state('layout.relation', {
        templateUrl: 'views/relation.html',
        controller: 'RelationCtrl',
        controllerAs: 'relation'
      });
  });
