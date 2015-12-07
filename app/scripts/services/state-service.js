/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var StateService = (function () {
        function StateService() {
        }
        return StateService;
    })();
    angulartsApp.StateService = StateService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('State', angulartsApp.StateService);
//# sourceMappingURL=state-service.js.map