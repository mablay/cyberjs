/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var SystemService = (function () {
        function SystemService($localStorage) {
            this.storage = $localStorage;
            this.storage.systems = this.storage.systems || {};
        }
        SystemService.prototype.create = function (opt) {
            // Default data
            var system = {
                id: angulartsApp.randomId(),
                name: 'New System',
                description: '',
                parameters: [],
                relations: []
            };
            if (typeof opt === 'string') {
                system.name = opt;
            }
            else {
                system = _.defaults(opt, system);
            }
            // save system
            this.storage.systems[system.id] = system;
            return system;
        };
        SystemService.prototype.list = function () {
            return this.storage.systems || {};
        };
        SystemService.prototype.read = function (id) {
            return this.storage.systems[id];
        };
        return SystemService;
    })();
    angulartsApp.SystemService = SystemService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('System', angulartsApp.SystemService);
//# sourceMappingURL=system-service.js.map