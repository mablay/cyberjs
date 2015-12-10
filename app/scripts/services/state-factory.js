/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    function stateFactory(instanceId) {
        return new StateService(instanceId);
    }
    angulartsApp.stateFactory = stateFactory;
    var StateService = (function () {
        function StateService(instanceId) {
            this.instanceId = instanceId;
        }
        return StateService;
    })();
    angulartsApp.StateService = StateService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').factory('StateFactory', angulartsApp.stateFactory);
//# sourceMappingURL=state-factory.js.map