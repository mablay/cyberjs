/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export interface IParameter {
    id: string;
    name: string;
    description: string;
    min: number;
    max: number;
    default: number;
  }

  export class ParameterCtrl {
    // @ngInject
    constructor () {

    }
  }
}

angular.module('angulartsApp')
  .controller('ParameterCtrl', angulartsApp.ParameterCtrl);
