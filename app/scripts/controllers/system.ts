/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface ISystemScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class SystemCtrl {
    // @ngInject
    constructor (private $scope: ISystemScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angulartsApp')
  .controller('SystemCtrl', angulartsApp.SystemCtrl);
