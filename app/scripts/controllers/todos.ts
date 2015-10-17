/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface ITodosScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class TodosCtrl {
    // @ngInject
    constructor (private $scope: ITodosScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angulartsApp')
  .controller('TodosCtrl', angulartsApp.TodosCtrl);
