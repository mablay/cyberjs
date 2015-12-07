/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface IInstance {
    id: string;
    systemId: string;
    history: Array<IState>
  }

  export class InstanceCtrl {
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
  .controller('InstanceCtrl', angulartsApp.InstanceCtrl);
