/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export function parameterFactory() {
    return function(system) {
      return new ParameterFactory(system);
    }
  }

  export class ParameterFactory {
    storage:any;

    // @ngInject
    constructor (private system:any) {
      //this.storage = $localStorage;
      console.log('[ParamFactory] constructor %o', system);
    }

    list() {
      return this.storage.systems[this.system.id].parameters;
    }
  }
}

angular.module('angulartsApp').factory('parameter', angulartsApp.parameterFactory);
