/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var MainCtrl = (function () {
        // @ngInject
        function MainCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return MainCtrl;
    })();
    angulartsApp.MainCtrl = MainCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('MainCtrl', angulartsApp.MainCtrl);
//# sourceMappingURL=main.js.map