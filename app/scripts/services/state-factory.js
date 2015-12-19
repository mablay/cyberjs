/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    function stateFactory($localStorage) {
        return function (instanceId) {
            return new StateService(instanceId, $localStorage);
        };
    }
    angulartsApp.stateFactory = stateFactory;
    var StateService = (function () {
        function StateService(instanceId, $localStorage) {
            this.instanceId = instanceId;
            this.storage = $localStorage;
        }
        StateService.prototype.read = function (index) {
            console.debug('[StateService] instance %s read state with index %s', this.instanceId, index);
            /*
            var state:IState = {
              index: index,
              values: {}
            };
            */
            return null;
        };
        return StateService;
    })();
    angulartsApp.StateService = StateService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').factory('StateFactory', angulartsApp.stateFactory);
//# sourceMappingURL=state-factory.js.map