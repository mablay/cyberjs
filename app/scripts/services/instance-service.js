/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var InstanceService = (function () {
        function InstanceService() {
        }
        return InstanceService;
    })();
    angulartsApp.InstanceService = InstanceService;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').service('Instance', angulartsApp.InstanceService);
//# sourceMappingURL=instance-service.js.map