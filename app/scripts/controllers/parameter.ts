/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface IParameterScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class ParameterCtrl {
    // @ngInject
    constructor (private $scope: IParameterScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angulartsApp')
  .controller('ParameterCtrl', angulartsApp.ParameterCtrl);
