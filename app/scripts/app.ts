/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="controllers/system.ts" />
/// <reference path="controllers/parameter.ts" />
/// <reference path="controllers/relation.ts" />
/// <reference path="controllers/state.ts" />
/// <reference path="controllers/instance.ts" />


'use strict';

angular.module('angulartsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngStorage'
  ])
  .config(['$localStorageProvider', function ($localStorageProvider) {
      $localStorageProvider.setKeyPrefix('cy_');
  }])
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
        controller: 'MainCtrl',
        controllerAs: 'vc'
      })
      .state('layout.system', {
        url: '/system',
        templateUrl: 'views/system.html',
        controller: 'SystemCtrl',
        controllerAs: 'systemCtrl'
      })
      .state('layout.systemDetail', {
        url: '/system/:id',
        templateUrl: 'views/system-detail.html',
        controller: 'SystemCtrl',
        controllerAs: 'systemCtrl'
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
