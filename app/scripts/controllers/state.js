/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var StateCtrl = (function () {
        // @ngInject
        function StateCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return StateCtrl;
    })();
    angulartsApp.StateCtrl = StateCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp')
    .controller('StateCtrl', angulartsApp.StateCtrl);
//# sourceMappingURL=state.js.map