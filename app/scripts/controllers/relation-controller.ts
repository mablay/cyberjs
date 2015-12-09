/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class RelationCtrl {


    relation:IRelation;
    relationService:RelationService;
    parameters:Array<IParameter>;

    // @ngInject
    constructor ($state, RelationFactory, ParameterFactory) {
      var systemId = $state.params.systemId;
      console.debug('[RelationCtrl] systemId %s, parameterId %s', systemId, $state.params.relationId);
      this.relationService = RelationFactory(systemId);
      console.debug('[RelationCtrl] parameter %o', this.relationService);
      this.relation = this.relationService.read($state.params.relationId);
      console.debug('[RelationCtrl] data %o', this.relation);
      this.parameters = ParameterFactory(systemId).list();
    }

  }
}

angular.module('angulartsApp')
  .controller('RelationCtrl', angulartsApp.RelationCtrl);
