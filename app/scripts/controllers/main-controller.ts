/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class MainCtrl {

    instances: Array<string>;
    systems: SystemService;

    // @ngInject
    constructor (System) {
      this.systems = System;
    }
  }
}

angular.module('angulartsApp').controller('MainCtrl', angulartsApp.MainCtrl);
