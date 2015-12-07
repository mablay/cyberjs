/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var InstanceCtrl = (function () {
        // @ngInject
        function InstanceCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return InstanceCtrl;
    })();
    angulartsApp.InstanceCtrl = InstanceCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp')
    .controller('InstanceCtrl', angulartsApp.InstanceCtrl);
//# sourceMappingURL=instance-controller.js.map