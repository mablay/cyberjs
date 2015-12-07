/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export interface ISystem {
    id: string;
    name: string;
    description: string;
    parameters: Array<string>;  // Array of IDs
    relations: Array<string>;   // Array of IDs
  }

  export class SystemService {
    storage: any;

    constructor($localStorage) {
      this.storage = $localStorage;
      this.storage.systems = this.storage.systems || {};
    }

    create(opt:{name:string}|string):ISystem {
      // Default data
      var system:ISystem = {
        id: angulartsApp.randomId(),
        name: 'New System',
        description: '',
        parameters: [],
        relations: []
      };

      if (typeof opt === 'string') {
        system.name = opt;
      } else {
        system = <ISystem>_.defaults(opt, system);
      }

      // save system
      this.storage.systems[system.id] = system;

      return system;
    }

    list():{[id:string]:ISystem} {
      return this.storage.systems || {};
    }

    read(id:string):ISystem {
      return this.storage.systems[id];
    }

  }

}

angular.module('angulartsApp').service('System', angulartsApp.SystemService);
