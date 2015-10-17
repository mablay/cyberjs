/// <reference path="../app.ts" />
'use strict';
var angulartsApp;
(function (angulartsApp) {
    var RelationCtrl = (function () {
        // @ngInject
        function RelationCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return RelationCtrl;
    })();
    angulartsApp.RelationCtrl = RelationCtrl;
})(angulartsApp || (angulartsApp = {}));
angular.module('angulartsApp').controller('RelationCtrl', angulartsApp.RelationCtrl);
//# sourceMappingURL=relation.js.map