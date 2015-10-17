/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var ParameterCtrl = (function () {
        // @ngInject
        function ParameterCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return ParameterCtrl;
    })();
    angulartsApp.ParameterCtrl = ParameterCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('ParameterCtrl', angulartsApp.ParameterCtrl);
//# sourceMappingURL=parameter.js.map