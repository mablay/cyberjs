/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  import IStateParamsService = ng.ui.IStateParamsService;
  export interface ISystem {
    id: string;
    name: string;
    description: string;
    parameters: Array<string>;
    relations: Array<string>;
  }



  var randomId = function():string {
    return ''+Math.floor((Math.random() * 100) + 1)+Date.now();
  };





  export class SystemData {
    storage: any;

    constructor(storageEngine) {
      this.storage = storageEngine;
      this.storage.systems = this.storage.systems || {};
    }

    create(opt:{name:string}|string):ISystem {
      // Default data
      var system:ISystem = {
        id: randomId(),
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




  export class SystemCtrl {

    data:SystemData;
    system:ISystem;

    // @ngInject
    constructor ($localStorage, $stateParams) {
      console.log($stateParams);
      this.data = new SystemData($localStorage);
      if ($stateParams.id) {
        this.system = this.data.read($stateParams.id);
      }
    }

    list():{[id:string]:ISystem} {
      return this.data.list();
    }

    read(id:string):ISystem {
      return this.data.read(id);
    }

    uiAddSystem(name):void {
      console.log('[System] User added system %s', name);
      var system = this.data.create(name);
      console.log('[System] create system %o', system);
      console.log('[System] system list %o', this.data.list());

    }

  }
}

angular.module('angulartsApp').controller('SystemCtrl', angulartsApp.SystemCtrl);
