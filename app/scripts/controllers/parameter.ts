/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export interface ParameterMap {
    [key: string]: Parameter;
  }

  export class ParameterCtrl {
    // @ngInject
    constructor () {

    }
  }
}

angular.module('angulartsApp')
  .controller('ParameterCtrl', angulartsApp.ParameterCtrl);
