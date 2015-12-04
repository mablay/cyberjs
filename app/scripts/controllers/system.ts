/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class SystemCtrl {

    id: string;
    name: string;
    description: string;
    parameters: ParameterMap;
    relations: RelationMap;

    // @ngInject
    constructor () {

    }
  }
}

angular.module('angulartsApp')
  .controller('SystemCtrl', angulartsApp.SystemCtrl);
