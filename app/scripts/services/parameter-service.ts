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

  export class ParameterService {
    storage: any;

    constructor($localStorage) {
      this.storage = $localStorage;
      this.storage.parameters = this.storage.parameters || {};
    }

    public create(opt:{name:string}|string):IParameter {
      console.debug('[Parameter] create %o', opt);
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
      this.storage.parameters[parameter.id] = parameter;

      return parameter;
    }

    public list():{[id:string]:IParameter} {
      console.log('[Parameter] list %o', this.storage.parameters);
      return this.storage.parameters || {};
    }

    read(id:string):IParameter {
      return this.storage.parameters[id];
    }

    remove(id:string):void {
      delete this.storage.parameters[id];
    }

  }
}

angular.module('angulartsApp').service('Parameter', angulartsApp.ParameterService);
