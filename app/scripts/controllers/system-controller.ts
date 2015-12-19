/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  import IStateParamsService = ng.ui.IStateParamsService;


  export class SystemCtrl {

    data:SystemService;
    system:ISystem;
    parameters:ParameterFactory;
    relations:RelationService;
    instances:InstanceService;
    associatedInstances:Array<IInstance>;

    // @ngInject
    constructor (System, ParameterFactory, RelationFactory, Instance, $stateParams, public $state, $scope) {
      console.log('[SystemCtrl] constructor stateParams.systemId %o', $stateParams.systemId);
      this.data = System;//new SystemService($localStorage);
      if ($stateParams.systemId) {
        this.system = this.data.read($stateParams.systemId);
        this.parameters = ParameterFactory(this.system.id);
        console.log('[SystemCtrl] constructor %o', this.parameters);
        this.relations = RelationFactory(this.system.id);
        var instanceList = Instance.list();
        var system = this.system;
        this.instances = Instance;
        this.associatedInstances = _.filter(instanceList, function(instance:IInstance){
          return instance.systemId === system.id;
        });
        console.log('[SystemCtrl] constructor associated instances %o', this.associatedInstances);
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

    uiCreateInstance():void {
      console.debug('[SystemCtrl] create instance');

      // TODO: Validate system, params, relations
      // ...

      var instance = this.instances.create(this.system.id);
      console.info('[SystemCtrl] created instance %o', instance.id);

      this.$state.go('layout.instance', {
        instanceId: instance.id
      });

    }

  }
}

angular.module('angulartsApp').controller('SystemCtrl', angulartsApp.SystemCtrl);
