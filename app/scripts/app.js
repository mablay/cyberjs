/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="directives/ts-list-directive.ts" />
/// <reference path="services/system-service.ts" />
/// <reference path="services/parameter-factory.ts" />
/// <reference path="services/parameter-factory.ts" />
/// <reference path="services/relation-factory.ts" />
/// <reference path="services/state-factory.ts" />
/// <reference path="services/instance-service.ts" />
/// <reference path="controllers/system-controller.ts" />
/// <reference path="controllers/parameter-controller.ts" />
/// <reference path="controllers/relation-controller.ts" />
/// <reference path="controllers/state-controller.ts" />
/// <reference path="controllers/instance-controller.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    angulartsApp.randomId = function () {
        return '' + Math.floor((Math.random() * 90) + 10) + Date.now();
    };
})(angulartsApp || (angulartsApp = {}));
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
    .config(function ($stateProvider, $urlRouterProvider) {
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
        .state('layout.systems', {
        url: '/system',
        templateUrl: 'views/system.html',
        controller: 'SystemCtrl',
        controllerAs: 'systemCtrl'
    })
        .state('layout.system', {
        url: '/system/:systemId',
        templateUrl: 'views/system-detail.html',
        controller: 'SystemCtrl',
        controllerAs: 'systemCtrl'
    })
        .state('layout.system.parameter', {
        url: '/parameter/:parameterId',
        templateUrl: 'views/parameter.html',
        controller: 'ParameterCtrl',
        controllerAs: 'vc'
    })
        .state('layout.system.relation', {
        url: '/relation/:relationId',
        templateUrl: 'views/relation.html',
        controller: 'RelationCtrl',
        controllerAs: 'vc'
    })
        .state('layout.instance', {
        url: '/instance/:instanceId',
        templateUrl: 'views/instance.html',
        controller: 'InstanceCtrl',
        controllerAs: 'vc'
    })
        .state('layout.instance.state', {
        url: '/state/:stateId',
        templateUrl: 'views/state.html',
        controller: 'StateCtrl',
        controllerAs: 'vc'
    });
});
//# sourceMappingURL=app.js.map