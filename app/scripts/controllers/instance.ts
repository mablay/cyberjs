/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface IInstanceScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class InstanceCtrl {
    // @ngInject
    constructor (private $scope: IInstanceScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angulartsApp')
  .controller('InstanceCtrl', angulartsApp.InstanceCtrl);
