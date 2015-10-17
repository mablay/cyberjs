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
]).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    }).state('todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl',
        controllerAs: 'todos'
    }).state('system', {
        templateUrl: 'views/system.html',
        controller: 'SystemCtrl',
        controllerAs: 'system'
    }).state('parameter', {
        templateUrl: 'views/parameter.html',
        controller: 'ParameterCtrl',
        controllerAs: 'parameter'
    }).state('instance', {
        templateUrl: 'views/instance.html',
        controller: 'InstanceCtrl',
        controllerAs: 'instance'
    }).state('relation', {
        templateUrl: 'views/relation.html',
        controller: 'RelationCtrl',
        controllerAs: 'relation'
    });
});
//# sourceMappingURL=app.js.map