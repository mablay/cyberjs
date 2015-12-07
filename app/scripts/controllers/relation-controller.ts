/// <reference path="../app.ts" />

'use strict';

module angulartsApp {
  export interface IRelation {
    id: string;
    name: string;
    description: string;
    domainId: string;
    coDomainId: string;
    data: Array<number>;
  }

  export class RelationCtrl {
    // @ngInject
    constructor (private $scope: IRelation) {

    }
  }
}

angular.module('angulartsApp')
  .controller('RelationCtrl', angulartsApp.RelationCtrl);
