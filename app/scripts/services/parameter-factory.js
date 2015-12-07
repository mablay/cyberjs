/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    function parameterFactory() {
        return function (system) {
            return new ParameterFactory(system);
        };
    }
    angulartsApp.parameterFactory = parameterFactory;
    var ParameterFactory = (function () {
        // @ngInject
        function ParameterFactory(system) {
            this.system = system;
            //this.storage = $localStorage;
            console.log('[ParamFactory] constructor %o', system);
        }
        ParameterFactory.prototype.list = function () {
            return this.storage.systems[this.system.id].parameters;
        };
        return ParameterFactory;
    })();
    angulartsApp.ParameterFactory = ParameterFactory;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').factory('parameter', angulartsApp.parameterFactory);
//# sourceMappingURL=parameter-factory.js.map