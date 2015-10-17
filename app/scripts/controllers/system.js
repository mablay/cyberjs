/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var SystemCtrl = (function () {
        // @ngInject
        function SystemCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return SystemCtrl;
    })();
    angulartsApp.SystemCtrl = SystemCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('SystemCtrl', angulartsApp.SystemCtrl);
//# sourceMappingURL=system.js.map