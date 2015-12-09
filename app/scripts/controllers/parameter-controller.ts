/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export class ParameterCtrl {

    parameter:IParameter;
    parameterService:ParameterFactory;

    // @ngInject
    constructor ($state, ParameterFactory) {
      console.debug('[ParameterCtrl] systemId %s, parameterId %s', $state.params.systemId, $state.params.parameterId);
      this.parameterService = ParameterFactory($state.params.systemId);
      console.debug('[ParameterCtrl] parameter %o', this.parameterService);
      this.parameter = this.parameterService.read($state.params.parameterId);
      console.debug('[ParameterCtrl] data %o', this.parameter);
    }
  }
}

angular.module('angulartsApp').controller('ParameterCtrl', angulartsApp.ParameterCtrl);
