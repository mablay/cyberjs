/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var StateCtrl = (function () {
        // @ngInject
        function StateCtrl(StateFactory, Instance, System, $state) {
            var stateId = $state.params.stateId;
            var instanceId = $state.params.instanceId;
            if (stateId && instanceId) {
                var instance = Instance.read(instanceId);
                console.debug('[StateCtrl] constructor instance %o', instance);
                this.system = System.read(instance.systemId);
                console.debug('[StateCtrl] constructor system %o', this.system);
                var stateService = StateFactory(instanceId);
                this.state = stateService.read(stateId) || this.defaultState(this.system);
                console.debug('[StateCtrl] constructor state %o', this.state);
            }
            else {
                console.warn('[StateCtrl] constructor missing either state or instance parameter');
            }
        }
        StateCtrl.prototype.defaultState = function (system) {
            var state = {
                index: "0",
                values: {}
            };
            // Set default values
            var paramKeys = Object.keys(system.parameters);
            for (var i = 0; i < paramKeys.length; i++) {
                var key = paramKeys[i];
                var value = system.parameters[key].default;
                state.values[key] = value;
            }
            return state;
        };
        StateCtrl.prototype.parameterName = function (id) {
            return this.system.parameters[id].name;
        };
        return StateCtrl;
    })();
    angulartsApp.StateCtrl = StateCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('StateCtrl', angulartsApp.StateCtrl);
//# sourceMappingURL=state-controller.js.map