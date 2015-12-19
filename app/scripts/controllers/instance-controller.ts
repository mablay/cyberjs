/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class InstanceCtrl {

    instance:IInstance;
    instanceService:InstanceService;
    system:ISystem;

    // @ngInject
    constructor (Instance, System, $state) {
      if ($state.params.instanceId) {
        this.instanceService = Instance;
        this.instance = this.instanceService.read($state.params.instanceId);
        console.debug('[InstanceCtrl] constructor for %o', this.instance);
        this.system = System.read(this.instance.systemId);
      }
    }

    // returns state index
    currentState():string {

      var index = "0";
      return index;
    }

  }
}

angular.module('angulartsApp').controller('InstanceCtrl', angulartsApp.InstanceCtrl);
