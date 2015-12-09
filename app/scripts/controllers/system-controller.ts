/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  import IStateParamsService = ng.ui.IStateParamsService;


  export class SystemCtrl {

    data:SystemService;
    system:ISystem;
    parameters:ParameterFactory;
    relations:RelationFactory;

    // @ngInject
    constructor (System, ParameterFactory, RelationFactory, $stateParams, public $state) {
      console.log('[SystemCtrl] constructor stateParams.systemId %o', $stateParams.systemId);
      this.data = System;//new SystemService($localStorage);
      if ($stateParams.systemId) {
        this.system = this.data.read($stateParams.systemId);
        this.parameters = ParameterFactory(this.system.id);
        this.relations = RelationFactory(this.system.id);
        console.log('[SystemCtrl] constructor %o', this.parameters);
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
    uiSelectParameter(parameterId):void {
      var state:any = angular.injector(['ui.router']).get('$state');
      var systemId = state.params.systemId;
      //var id = $scope.service.list();
      console.debug('[System] system %s, uiSelectParameter %s', systemId, parameterId)
      console.debug('[System] uiSelectParameter. Navigate to system[%s].parameter[%s]', systemId, parameterId);
      this.$state.go('layout.system.parameter', {systemId: systemId, parameterId:parameterId});
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
