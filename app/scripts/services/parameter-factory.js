/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    function parameterFactory($localStorage) {
        return function (systemId) {
            if (!$localStorage.systems[systemId]) {
                console.warn('[parameterFactory] Invalid System ID!');
                return null;
            }
            return new ParameterFactory(systemId, $localStorage);
        };
    }
    angulartsApp.parameterFactory = parameterFactory;
    var ParameterFactory = (function () {
        // @ngInject
        function ParameterFactory(systemId, $localStorage) {
            this.systemId = systemId;
            this.storage = $localStorage;
            this.storage.systems[this.systemId].parameters = this.storage.systems[this.systemId].parameters || {};
            console.log('[ParamFactory] Create ParameterService for system %s', this.systemId);
        }
        ParameterFactory.prototype.list = function () {
            console.debug('[ParamFactory] list %o', this.systemId);
            return this.storage.systems[this.systemId].parameters;
        };
        ParameterFactory.prototype.create = function (opt) {
            console.debug('[ParamFactory] create %o', opt);
            // Default data
            var parameter = {
                id: angulartsApp.randomId(),
                name: 'New System',
                description: '',
                min: 0,
                max: 100,
                default: 10
            };
            if (typeof opt === 'string') {
                parameter.name = opt;
            }
            else {
                parameter = _.defaults(opt, parameter);
            }
            // save parameter
            this.storage.systems[this.systemId].parameters[parameter.id] = parameter;
            return parameter;
        };
        ParameterFactory.prototype.read = function (id) {
            return this.storage.systems[this.systemId].parameters[id];
        };
        ParameterFactory.prototype.remove = function (id) {
            delete this.storage.systems[this.systemId].parameters[id];
        };
        ParameterFactory.$inject = ['$localStorage'];
        return ParameterFactory;
    })();
    angulartsApp.ParameterFactory = ParameterFactory;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').factory('ParameterFactory', angulartsApp.parameterFactory);
//# sourceMappingURL=parameter-factory.js.map