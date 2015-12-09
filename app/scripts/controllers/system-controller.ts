/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  import IStateParamsService = ng.ui.IStateParamsService;


  export class SystemCtrl {

    data:SystemService;
    system:ISystem;
    parameters:ParameterFactory;
    relations:RelationService;

    // @ngInject
    constructor (System, ParameterFactory, RelationFactory, $stateParams, public $state, $scope) {
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



    // PARAMETER methods

    uiAddParameter(name):void {
      console.debug('[System] this %o', this);
      console.debug('[System] Add parameter %s', name);
      this.system.parameters.push(name);
    }

    // Here we need lambda syntax to keep the "this" context
    public onSelectParameter = (parameterId:string):void => {
      console.debug('[System] selectParameter %s', parameterId);
      this.$state.go('layout.system.parameter', {
        systemId: this.$state.params.systemId,
        parameterId: parameterId
      });
    }

    uiRemoveParameter(index):void {
      var name = this.system.parameters[index];
      console.debug('[System] Remove parameter %s', name);
      this.system.parameters.splice(index, 1);
    }


    // RELATION methods

    uiAddRelation(name):void {
      console.debug('[System] Add relation %s', name);
    }
    uiRemoveRelation(name):void {
      console.debug('[System] Remove relation %s', name);
    }

    // Here we need lambda syntax to keep the "this" context
    public onSelectRelation = (relationId:string):void => {
      console.debug('[System] selectRelation %s', relationId);
      this.$state.go('layout.system.relation', {
        systemId: this.$state.params.systemId,
        relationId: relationId
      });
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
