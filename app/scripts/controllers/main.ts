/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class MainCtrl {

    instances: Array<string>;
    systems: SystemData;

    // @ngInject
    constructor ($localStorage) {
      this.systems = new SystemData($localStorage);
    }
  }
}

angular.module('angulartsApp').controller('MainCtrl', angulartsApp.MainCtrl);
