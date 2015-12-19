/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export interface IState {
    index: string;
    values: [{id:string, value:number}]|{};
  }


  export function stateFactory($localStorage) {
    return function(instanceId:string):StateService {
      return new StateService(instanceId, $localStorage);
    }
  }

  export class StateService {

    storage:any;

    constructor(public instanceId:string, $localStorage) {
      this.storage = $localStorage;
    }


    read(index:string):IState {
      console.debug('[StateService] instance %s read state with index %s', this.instanceId, index);
      /*
      var state:IState = {
        index: index,
        values: {}
      };
      */
      return null;
    }

  }
}

angular.module('angulartsApp').factory('StateFactory', angulartsApp.stateFactory);
