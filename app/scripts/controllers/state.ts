/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface IState {
    id: string;
    systemId: string;
    parameterValues: {[id: string]: number};
  }

  export class StateCtrl {
    // @ngInject
    constructor (private $scope: any) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('angulartsApp')
  .controller('StateCtrl', angulartsApp.StateCtrl);
