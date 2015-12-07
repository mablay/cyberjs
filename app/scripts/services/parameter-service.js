/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var ParameterService = (function () {
        function ParameterService($localStorage) {
            this.storage = $localStorage;
            this.storage.parameters = this.storage.parameters || {};
        }
        ParameterService.prototype.create = function (opt) {
            console.debug('[Parameter] create %o', opt);
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
            this.storage.parameters[parameter.id] = parameter;
            return parameter;
        };
        ParameterService.prototype.list = function () {
            console.log('[Parameter] list %o', this.storage.parameters);
            return this.storage.parameters || {};
        };
        ParameterService.prototype.read = function (id) {
            return this.storage.parameters[id];
        };
        ParameterService.prototype.remove = function (id) {
            delete this.storage.parameters[id];
        };
        return ParameterService;
    })();
    angulartsApp.ParameterService = ParameterService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('Parameter', angulartsApp.ParameterService);
//# sourceMappingURL=parameter-service.js.map