/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  import IStateParamsService = ng.ui.IStateParamsService;


  export class SystemCtrl {

    data:SystemService;
    system:ISystem;
    parameter:ParameterService;

    // @ngInject
    constructor (System, Parameter, $stateParams) {
      console.log($stateParams);
      this.data = System;//new SystemService($localStorage);
      this.parameter = Parameter;//new ParameterData($localStorage);
      console.log('[SystemCtrl] constructor %o', this.parameter.list());
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

    uiAddParameter(name):void {
      console.debug('[System] this %o', this);
      console.debug('[System] Add parameter %s', name);
      this.system.parameters.push(name);
    }
    uiRemoveParameter(index):void {
      var name = this.system.parameters[index];
      console.debug('[System] Remove parameter %s', name);
      this.system.parameters.splice(index, 1);
    }


    uiAddRelation(name):void {
      console.debug('[System] Add relation %s', name);
    }
    uiRemoveRelation(name):void {
      console.debug('[System] Remove relation %s', name);
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
