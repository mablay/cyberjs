/// <reference path="../app.ts" />

'use strict';

module angulartsApp {

  export function parameterFactory($localStorage) {
    return function(systemId) {
      if (!$localStorage.systems[systemId]) {
        console.warn('[parameterFactory] Invalid System ID!');
        return null;
      }
      return new ParameterFactory(systemId, $localStorage);
    }
  }


  export interface IParameter {
    id: string;
    name: string;
    description: string;
    min: number;
    max: number;
    default: number;
  }


  export class ParameterFactory {

    storage:any;  //$localStorage

    static $inject = ['$localStorage'];
    // @ngInject
    constructor (public systemId:string, $localStorage) {
      this.storage = $localStorage;
      this.storage.systems[this.systemId].parameters = this.storage.systems[this.systemId].parameters || {};
      console.log('[ParamFactory] Create ParameterService for system %s', this.systemId);
    }

    list() {
      console.debug('[ParamFactory] list %o', this.systemId);
      return this.storage.systems[this.systemId].parameters;
    }

    create(opt:{name:string}|string):IParameter {
      console.debug('[ParamFactory] create %o', opt);
      // Default data
      var parameter:IParameter = {
        id: randomId(),
        name: 'New System',
        description: '',
        min: 0,
        max: 100,
        default: 10
      };

      if (typeof opt === 'string') {
        parameter.name = opt;
      } else {
        parameter = <IParameter>_.defaults(opt, parameter);
      }

      // save parameter
      this.storage.systems[this.systemId].parameters[parameter.id] = parameter;

      return parameter;
    }

    read(id:string):IParameter {
      return this.storage.systems[this.systemId].parameters[id];
    }

    remove(id:string):void {
      delete this.storage.systems[this.systemId].parameters[id];
    }

  }

}

angular.module('angulartsApp').factory('ParameterFactory', angulartsApp.parameterFactory);
