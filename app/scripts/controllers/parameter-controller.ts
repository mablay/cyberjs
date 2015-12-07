/// <reference path="../app.ts" />

'use strict';

module angulartsApp {




  export class ParameterCtrl {
    // @ngInject
    constructor () {

    }
  }
}

angular.module('angulartsApp')
  .controller('ParameterCtrl', angulartsApp.ParameterCtrl);
