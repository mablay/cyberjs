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

    }
  }
}

angular.module('angulartsApp').controller('StateCtrl', angulartsApp.StateCtrl);
