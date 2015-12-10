/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class InstanceCtrl {

    instance:IInstance;

    // @ngInject
    constructor (InstanceFactory, $state) {
      if ($state.params.instanceId) {
        this.instance = InstanceFactory($state.params.instanceId);
        console.debug('[InstanceCtrl] constructor for %o', this.instance);
      }
    }
  }
}

angular.module('angulartsApp').controller('InstanceCtrl', angulartsApp.InstanceCtrl);
