/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var SystemCtrl = (function () {
        // @ngInject
        function SystemCtrl() {
        }
        return SystemCtrl;
    })();
    angulartsApp.SystemCtrl = SystemCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('SystemCtrl', angulartsApp.SystemCtrl);
//# sourceMappingURL=system.js.map