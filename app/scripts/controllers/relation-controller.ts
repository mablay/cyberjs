/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class RelationCtrl {
    // @ngInject
    constructor (private $scope: IRelation) {

    }
  }
}

angular.module('angulartsApp')
  .controller('RelationCtrl', angulartsApp.RelationCtrl);
