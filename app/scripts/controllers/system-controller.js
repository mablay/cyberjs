/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var SystemCtrl = (function () {
        // @ngInject
        function SystemCtrl(System, ParameterFactory, RelationFactory, Instance, $stateParams, $state, $scope) {
            var _this = this;
            this.$state = $state;
            // Here we need lambda syntax to keep the "this" context
            this.onSelectParameter = function (parameterId) {
                console.debug('[System] selectParameter %s', parameterId);
                _this.$state.go('layout.system.parameter', {
                    systemId: _this.$state.params.systemId,
                    parameterId: parameterId
                });
            };
            // Here we need lambda syntax to keep the "this" context
            this.onSelectRelation = function (relationId) {
                console.debug('[System] selectRelation %s', relationId);
                _this.$state.go('layout.system.relation', {
                    systemId: _this.$state.params.systemId,
                    relationId: relationId
                });
            };
            console.log('[SystemCtrl] constructor stateParams.systemId %o', $stateParams.systemId);
            this.data = System; //new SystemService($localStorage);
            if ($stateParams.systemId) {
                this.system = this.data.read($stateParams.systemId);
                this.parameters = ParameterFactory(this.system.id);
                console.log('[SystemCtrl] constructor %o', this.parameters);
                this.relations = RelationFactory(this.system.id);
                var instanceList = Instance.list();
                var system = this.system;
                this.instances = Instance;
                this.associatedInstances = _.filter(instanceList, function (instance) {
                    return instance.systemId === system.id;
                });
                console.log('[SystemCtrl] constructor associated instances %o', this.associatedInstances);
            }
        }
        SystemCtrl.prototype.list = function () {
            return this.data.list();
        };
        SystemCtrl.prototype.read = function (id) {
            return this.data.read(id);
        };
        // PARAMETER methods
        SystemCtrl.prototype.uiAddParameter = function (name) {
            console.debug('[System] this %o', this);
            console.debug('[System] Add parameter %s', name);
            this.system.parameters.push(name);
        };
        SystemCtrl.prototype.uiRemoveParameter = function (index) {
            var name = this.system.parameters[index];
            console.debug('[System] Remove parameter %s', name);
            this.system.parameters.splice(index, 1);
        };
        // RELATION methods
        SystemCtrl.prototype.uiAddRelation = function (name) {
            console.debug('[System] Add relation %s', name);
        };
        SystemCtrl.prototype.uiRemoveRelation = function (name) {
            console.debug('[System] Remove relation %s', name);
        };
        SystemCtrl.prototype.uiAddSystem = function (name) {
            console.log('[System] User added system %s', name);
            var system = this.data.create(name);
            console.log('[System] create system %o', system);
            console.log('[System] system list %o', this.data.list());
        };
        SystemCtrl.prototype.uiCreateInstance = function () {
            console.debug('[SystemCtrl] create instance');
            // TODO: Validate system, params, relations
            // ...
            var instance = this.instances.create(this.system.id);
            console.info('[SystemCtrl] created instance %o', instance.id);
            this.$state.go('layout.instance', {
                instanceId: instance.id
            });
        };
        return SystemCtrl;
    })();
    angulartsApp.SystemCtrl = SystemCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('SystemCtrl', angulartsApp.SystemCtrl);
//# sourceMappingURL=system-controller.js.map