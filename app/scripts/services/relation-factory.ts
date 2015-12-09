/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export function relationFactory($localStorage) {
    return function(systemId) {
      if (!$localStorage.systems[systemId]) {
        console.warn('[relationFactory] Invalid System ID!');
        return null;
      }
      return new RelationService(systemId, $localStorage);
    }
  }


  export interface IRelation {
    id: string;
    name: string;
    description: string;
    domain: string;
    coDomain: string;
    data: any;
  }

  export class RelationService {

    // @ngInject
    constructor (public systemId:string, public storage) {
      this.storage.systems[this.systemId].relations = this.storage.systems[this.systemId].relations || {};
      console.log('[RelationFactory] Create RelationService for system %s', this.systemId);
    }

    list() {
      console.debug('[RelationService] list %o', this.systemId);
      return this.storage.systems[this.systemId].relations;
    }

    create(opt:{name:string}|string):IRelation {
      console.debug('[RelationService] create %o', opt);
      // Default data
      var relation:IRelation = {
        id: randomId(),
        name: 'New System',
        description: null,
        domain: null,
        coDomain: null,
        data: []
      };

      if (typeof opt === 'string') {
        relation.name = opt;
      } else {
        relation = <IRelation>_.defaults(opt, relation);
      }

      // save relation
      this.storage.systems[this.systemId].relations[relation.id] = relation;

      return relation;
    }

    read(id:string):IRelation {
      return this.storage.systems[this.systemId].relations[id];
    }

    remove(id:string):void {
      delete this.storage.systems[this.systemId].relations[id];
    }

  }
}

angular.module('angulartsApp').service('RelationFactory', angulartsApp.relationFactory);
