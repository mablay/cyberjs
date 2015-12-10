/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export function stateFactory(instanceId:string):StateService {
    return new StateService(instanceId);
  }

  export class StateService {


    constructor(public instanceId:string) {

    }






  }
}

angular.module('angulartsApp').factory('StateFactory', angulartsApp.stateFactory);
