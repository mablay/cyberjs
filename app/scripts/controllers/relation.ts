/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface IRelationScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class RelationCtrl {
    // @ngInject
    constructor (private $scope: IRelationScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angulartsApp')
  .controller('RelationCtrl', angulartsApp.RelationCtrl);
