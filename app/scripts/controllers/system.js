/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var randomId = function () {
        return '' + Math.floor((Math.random() * 100) + 1) + Date.now();
    };
    var SystemData = (function () {
        function SystemData(storageEngine) {
            this.storage = storageEngine;
            this.storage.systems = this.storage.systems || {};
        }
        SystemData.prototype.create = function (opt) {
            // Default data
            var system = {
                id: randomId(),
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
        SystemData.prototype.list = function () {
            return this.storage.systems || {};
        };
        SystemData.prototype.read = function (id) {
            return this.storage.systems[id];
        };
        return SystemData;
    })();
    angulartsApp.SystemData = SystemData;
    var SystemCtrl = (function () {
        // @ngInject
        function SystemCtrl($localStorage, $stateParams) {
            console.log($stateParams);
            this.data = new SystemData($localStorage);
            if ($stateParams.id) {
                this.system = this.data.read($stateParams.id);
            }
        }
        SystemCtrl.prototype.list = function () {
            return this.data.list();
        };
        SystemCtrl.prototype.read = function (id) {
            return this.data.read(id);
        };
        SystemCtrl.prototype.uiAddSystem = function (name) {
            console.log('[System] User added system %s', name);
            var system = this.data.create(name);
            console.log('[System] create system %o', system);
            console.log('[System] system list %o', this.data.list());
        };
        return SystemCtrl;
    })();
    angulartsApp.SystemCtrl = SystemCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('SystemCtrl', angulartsApp.SystemCtrl);
//# sourceMappingURL=system.js.map