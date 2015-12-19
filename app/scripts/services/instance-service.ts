/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export interface IInstance {
    id: string;
    systemId: string;
    history: Array<IState>
  }

/*
  export function instanceFactory($localStorage) {
    return function() {
      return new InstanceService($localStorage);
    }
  }
*/
  export class InstanceService {

    storage:any;

    // @ngInject
    constructor($localStorage) {
      this.storage = $localStorage;
      this.storage.instances = this.storage.instances || {};
    }

    create(systemId:string):IInstance {
      console.debug('[InstanceFactory] create new Instance of system %s', systemId);

      var instance:IInstance = {
        id: randomId(),
        systemId: systemId,
        history: []
      };

      // save parameter
      this.storage.instances[instance.id] = instance;

      return instance;
    }

    read(instanceId):IInstance {
      return this.storage.instances[instanceId];
    }

    list() {
      return this.storage.instances;
    }

  }
}

angular.module('angulartsApp').service('Instance', angulartsApp.InstanceService);
