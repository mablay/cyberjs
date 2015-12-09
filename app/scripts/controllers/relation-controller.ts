/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class RelationCtrl {


    relation:IRelation;
    relationService:RelationService;

    // @ngInject
    constructor ($state, RelationFactory) {
      console.debug('[RelationCtrl] systemId %s, parameterId %s', $state.params.systemId, $state.params.relationId);
      this.relationService = RelationFactory($state.params.systemId);
      console.debug('[RelationCtrl] parameter %o', this.relationService);
      this.relation = this.relationService.read($state.params.relationId);
      console.debug('[RelationCtrl] data %o', this.relation);
    }

  }
}

angular.module('angulartsApp')
  .controller('RelationCtrl', angulartsApp.RelationCtrl);
